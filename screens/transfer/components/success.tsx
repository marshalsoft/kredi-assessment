import { View, Text,Dimensions,TouchableOpacity,Image, FlatList, ScrollView } from 'react-native'
import React, { useState } from 'react'
import {BaseLayout,BackButton,PlaceHolderView,InnerContainer,CreditCard,Avatar, TextWrapper, WhiteText, BlackText, OrangeButton, OrangeText} from '../../../components';
import {NavigationProps,JsonDataSets, items, Reducers} from '../../../includes/types';
import CONSTANTS from '../../../includes/constants';
import { AddComma } from '../../../includes/myfunctions';
import styles from '../../../includes/styles';
import { NavigationContainerProps } from '@react-navigation/native';
const {width} = Dimensions.get("screen");
  interface ItemProps  {
    memo?:string;
    bank?:string;
    date?:string;
    ref?:string;
    amount?:number;
    currency?:string;
    status?:string;
    navigation?:NavigationProps;
    Reducer?:Reducers;
  }
const TransferSuccessScreen = ({Reducer,navigation,amount,memo}:ItemProps) => {
     
  
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
          <WhiteText style={{fontSize:20,fontWeight:"bold",marginHorizontal:20,marginVertical:20}}>Successful!</WhiteText>
          <InnerContainer 
          style={{padding:20}}
          >
        <View >
            <View 
            style={{justifyContent:"center"}}
            >
          </View>
          <ScrollView 
          style={{flex:1,width:"100%",minHeight:640}}
          >
          <View 
            style={{justifyContent:"center"}}
            >
                <View style={{height:120}}>

                </View>
                <BlackText style={{textAlign:"center"}}>Congratulations, your transfer was completed successfully!</BlackText>
                {[
                {label:"Transaction Details",description:"Amazon online payment"},
                {label:"Receipt",description:"Amazon online payment"}
            ].map((a,i)=><View style={[styles.inputWrapper]}>
          <BlackText style={{fontWeight:"bold"}}>{a.label}</BlackText>
          <View style={{padding:10,backgroundColor:"#F1F0F7",elevation:1,borderRadius:5,marginVertical:10}}>
          <BlackText style>{a.label}</BlackText>  
          </View>
            </View>)}
            <TouchableOpacity >
                <OrangeText style={{fontWeight:"normal"}}>Save beneficiary</OrangeText>
            </TouchableOpacity>
            <View 
            style={{justifyContent:"center",alignItems:"center",width:"100%",marginVertical:30}}
            >
            <OrangeButton 
            onPress={()=>navigation?.goBack()}
            >
            <WhiteText >Ok</WhiteText>
            </OrangeButton>
            <TouchableOpacity >
                <OrangeText style={{fontWeight:"normal"}}>Download Receipt</OrangeText>
            </TouchableOpacity>
            </View>
            </View>
    </ScrollView>
        </View>
         </InnerContainer>
         </View>
         </BaseLayout>
  )
}

export default TransferSuccessScreen;