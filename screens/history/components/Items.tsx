import { View, Text,Dimensions,TouchableOpacity,Image, FlatList } from 'react-native'
import React, { useState } from 'react'
import {BaseLayout,PlaceHolderView,InnerContainer,CreditCard,Avatar, TextWrapper, WhiteText, BlackText} from '../../../components';
import {ScreenComponentType,JsonDataSets,HistoryItemProps, items} from '../../../includes/types';
import CONSTANTS from '../../../includes/constants';
const {width} = Dimensions.get("screen");
  
const TransactionHistoryItemComponent = ({placeholder,memo,currency,date,status,amount,onPress}:HistoryItemProps) => {
     if(placeholder)
     {
      return <View 
      style={{paddingVertical:15,flexDirection:"row",height:80,flex:1,marginHorizontal:5,justifyContent:"center",alignItems:"center"}}
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
     onPress={onPress}
      style={{paddingVertical:15,flex:1,marginHorizontal:5,flexDirection:"row",justifyContent:"center",alignItems:"center"}}
      >
    <View 
    style={{flex:1,flexDirection:"column",justifyContent:"center"}}
    >
<Text style={{color:"#000000",marginLeft:5,fontSize:14,fontWeight:"bold"}}>{memo} </Text>
<Text style={{color:"#979697",marginLeft:5,fontSize:12}}>{date}</Text>
    </View>
    <View style={{height:"100%",justifyContent:"center",alignItems:"center"}} >
    <Text style={{color:status == "debit"?"#FF2567":"#008000",marginLeft:5,fontSize:14,fontWeight:"bold"}}>{currency}{amount}</Text>
   </View> 
   </TouchableOpacity>
   </View>
}

export default TransactionHistoryItemComponent;