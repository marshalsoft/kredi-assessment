import { View, Text,Dimensions,TouchableOpacity,Image, FlatList, Alert } from 'react-native'
import React, { useState } from 'react'
import CardSection from '../components/CardSection';
import {BaseLayout,PlaceHolderView,InnerContainer,CreditCard,Avatar, TextWrapper, WhiteText, BlackText} from '../../../components';
import {ScreenComponentType,JsonDataSets, items,HistoryItemProps} from '../../../includes/types';
import CONSTANTS from '../../../includes/constants';
import TransactionHistoryItemComponent from '../../history/components/Items';
import { AddComma } from '../../../includes/myfunctions';
const {width} = Dimensions.get("screen");
const TransactionHistorySection = ({Reducer,navigation,route}:ScreenComponentType) => {
    const money = new Intl.NumberFormat('de-CH',
    { style:'currency', currency: 'NGN' });
const [transactionHistory,setHistoryList] = useState<HistoryItemProps[]>([
{
    memo:"Top Up",
    amount:500,
    currency:CONSTANTS.CURRENCY.SYMBOLS.naira,
    date:"12/01/2023",
    placeholder:false,
    status:"debit"
},{
    memo:"Electricity",
    amount:5300,
    currency:CONSTANTS.CURRENCY.SYMBOLS.naira,
    date:"13/01/2023",
    placeholder:false,
    status:"debit"
},{
    memo:"Airtime",
    amount:700,
    currency:CONSTANTS.CURRENCY.SYMBOLS.naira,
    date:"13/01/2023",
    placeholder:false,
    status:"debit"
},{
    memo:"Airtime",
    amount:700,
    currency:CONSTANTS.CURRENCY.SYMBOLS.naira,
    date:"13/01/2023",
    placeholder:false,
    status:"credit"
},...Array.from({length:4}).map((a,i)=>{
    return {
    memo:"",
    amount:0,
    currency:"",
    date:"",
    placeholder:true
}})
])       
  
    return ( <InnerContainer 
        style={{padding:20}}
    >
        <View >
            <View 
            style={{justifyContent:"center"}}
            >
          <BlackText style={{fontSize:20,fontWeight:"bold"}}>Recent Transaction</BlackText>
          <TouchableOpacity 
          onPress={()=>{
            navigation?.navigate("transactions")
          }}
          style={{position:"absolute",right:0}}
          >
            <Text style={{color:"red"}}>View All</Text>
          </TouchableOpacity>
          </View>
          <FlatList
            initialNumToRender={10}
            maxToRenderPerBatch={10}
            updateCellsBatchingPeriod={10}
            removeClippedSubviews={true}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
     data={transactionHistory}
     renderItem={({item,index})=>{
        return <TransactionHistoryItemComponent 
        key={index}
        amount={AddComma(item.amount)}
        currency={item.currency}
        date={item.date}
        memo={item.memo}
        placeholder={item.placeholder}
        onPress={()=>{
            navigation?.navigate("transaction_details",item)
        }}
        />
     }}
    ItemSeparatorComponent={(leadingItem)=><View style={{minHeight:10}}>
    </View>}
    />
        </View>
         </InnerContainer>
  )
}

export default TransactionHistorySection;