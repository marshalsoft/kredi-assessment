import { View, Text,Dimensions,TouchableOpacity,Image, FlatList, ScrollView } from 'react-native'
import React, { useState } from 'react'
import {BaseLayout,BackButton,PlaceHolderView,InnerContainer,CreditCard,Avatar, TextWrapper, WhiteText, BlackText, DescriptionText} from '../../components';
import {ScreenComponentType,JsonDataSets, items} from '../../includes/types';
import CONSTANTS from '../../includes/constants';
import styles from '../../includes/styles';
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
const TransactionHistoryDetails = ({Reducer,navigation,route}:ScreenComponentType) => {
      const {amount,currency,memo,placeholder,date,status}:HistoryItemProps = route.params;
  
    return (<BaseLayout 
        backgroundColor={CONSTANTS.COLORS.dark}
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
          <WhiteText style={{fontSize:20,fontWeight:"bold",marginHorizontal:20,marginVertical:20}}>Transaction Details</WhiteText>
        <View style={{flexDirection:"column",paddingHorizontal:30,height:80}}>
        <WhiteText style={{fontSize:14}} >{status} payment</WhiteText>
        <View style={{flex:1,flexDirection:"row"}}>
        <View style={{flexDirection:"row",flex:1}}>
            <WhiteText style={{fontSize:14}} >{CONSTANTS.CURRENCY.SYMBOLS.naira}</WhiteText>
            <WhiteText style={{fontSize:25,fontWeight:"bold"}} >{AddComma(amount)}</WhiteText>
            <WhiteText style={{fontSize:14}} >.{"00"}</WhiteText>
        </View>
        <View style={{flexDirection:"column",alignItems:"flex-end"}} >
        <DescriptionText style={{color:"#9198A6"}}>{date}</DescriptionText>
        <DescriptionText style={{color:"#9198A6"}}>7:40PM</DescriptionText>
        </View>
        </View>
        </View>
          <InnerContainer 
          style={{padding:20}}
          >
            {[
                {label:"To",description:"Amazon online payment"},
                {label:"Narration",description:"Amazon online payment"},
                {label:"Reference",description:"Adkdkkde9e90e0"},
            ].map((a,i)=><View style={styles.inputWrapper}>
          <BlackText style={{fontWeight:"bold"}}>{a.label}</BlackText>
          <View style={{padding:10,backgroundColor:"white",elevation:1,borderRadius:5,marginVertical:10}}>
          <BlackText style>{a.label}</BlackText>  
          </View>
            </View>)}
         </InnerContainer>
         </View>
         </BaseLayout>
  )
}

export default TransactionHistoryDetails;