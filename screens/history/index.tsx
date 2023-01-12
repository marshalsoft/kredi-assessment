import { View, Text,Dimensions,TouchableOpacity,Image, FlatList, ScrollView } from 'react-native'
import React, { useState } from 'react'
import {BaseLayout,BackButton,PlaceHolderView,InnerContainer,CreditCard,Avatar, TextWrapper, WhiteText, BlackText} from '../../components';
import {ScreenComponentType,JsonDataSets, items} from '../../includes/types';
import CONSTANTS from '../../includes/constants';
import { AddComma } from '../../includes/myfunctions';
const {width} = Dimensions.get("screen");
  interface HistoryItemProps  {
    memo:string;
    date:string;
    amount:number;
    currency:string;
    placeholder:boolean;
    status?:string;
  }
const TransactionHistoryScreen = ({Reducer,navigation,route}:ScreenComponentType) => {
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
},...Array.from({length:14}).map((a,i)=>{
    return {
        memo:"Airtime",
        amount:700,
        currency:CONSTANTS.CURRENCY.SYMBOLS.naira,
        date:"13/01/2023",
        placeholder:false,
        status:"credit"
}})
])       
  
    return (<BaseLayout 
        >
          <View style={{flex:1,backgroundColor:"#28374C"}}>
          <View style={{flexDirection:"row",marginVertical:30}} >
          <BackButton
          style={{marginLeft:10}}
          onPress={()=>{
            navigation?.goBack();
          }}
          color='white'
          
          />
          </View>
          <WhiteText style={{fontSize:20,fontWeight:"bold",marginHorizontal:20,marginVertical:20}}>Transactions</WhiteText>
          <InnerContainer 
          style={{padding:20}}
          >
        <View >
            <View 
            style={{justifyContent:"center"}}
            >
          <BlackText style={{fontSize:15,fontWeight:"bold"}}>This month</BlackText>
          </View>
          <ScrollView 
          style={{flex:1,width:"100%",minHeight:640}}
          >
          <FlatList
          scrollEnabled={false}
            initialNumToRender={10}
            maxToRenderPerBatch={10}
            updateCellsBatchingPeriod={10}
            removeClippedSubviews={true}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
     data={transactionHistory}
     renderItem={({item,index})=>{
     if(item.placeholder)
     {
      return <View 
      style={{paddingVertical:15,flexDirection:"row",height:80,flex:1,marginHorizontal:5,flexDirection:"row",justifyContent:"center",alignItems:"center"}}
     >
  <View 
    style={{flex:1,flexDirection:"column",justifyContent:"center"}}
    >
    <PlaceHolderView style={{width:"60%"}} />
    <PlaceHolderView style={{width:"90%"}} /> 
    </View>
    <View style={{height:"100%",justifyContent:"center",alignItems:"center"}} >
    <PlaceHolderView style={{width:40}} /> 
    </View>
     </View>
     }
     return <View 
     style={{flexDirection:"column",width:"100%"}}
     >
      <TouchableOpacity 
     onPress={()=>{
        navigation?.navigate("transaction_details",item)
    }}
      style={{paddingVertical:15,flex:1,marginHorizontal:5,flexDirection:"row",justifyContent:"center",alignItems:"center"}}
      >
    <View 
    style={{flex:1,flexDirection:"column",justifyContent:"center"}}
    >
<Text style={{color:"#000000",marginLeft:5,fontSize:14,fontWeight:"bold"}}>{item?.memo} </Text>
<Text style={{color:"#979697",marginLeft:5,fontSize:12}}>{item?.date}</Text>
    </View>
    <View style={{height:"100%",justifyContent:"center",alignItems:"center"}} >
    <Text style={{color:item?.status == "debit"?"#FF2567":"#008000",marginLeft:5,fontSize:14,fontWeight:"bold"}}>{item.currency}{AddComma(item?.amount)}</Text>
   </View> 
   </TouchableOpacity>
   </View>}}
    ItemSeparatorComponent={(leadingItem)=><View style={{minHeight:10}}>
    </View>}
    />
    </ScrollView>
        </View>
         </InnerContainer>
         </View>
         </BaseLayout>
  )
}

export default TransactionHistoryScreen;