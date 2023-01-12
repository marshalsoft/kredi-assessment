import { View, Text,Dimensions,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import CardSection from '../components/CardSection';
import {BaseLayout,InnerContainer,CreditCard,Avatar, TextWrapper, WhiteText, BlackText} from '../../../components';
import {ScreenComponentType,JsonDataSets, items} from '../../../includes/types';
import CONSTANTS from '../../../includes/constants';
import { AddComma } from '../../../includes/myfunctions';
const {width} = Dimensions.get("screen");
interface QuickActionProps {
    icon:number;
    title:string;
    route:string;
  }
    const money = new Intl.NumberFormat('de-CH',
    { style:'currency', currency: 'NGN' });
    const formatedAmount = AddComma("399939");
      let lastPart = formatedAmount.split(".");
      
const QuickActionSection = ({navigation,Reducer,route}:ScreenComponentType) => {
    const quickActionButtons:QuickActionProps[] = [
        {
         title:"TRANSFER",
         route:'transfer',
         icon:require("../../../assets/images/ico1.png")
        },{
          title:"TOP UP",
          route:'topup',
          icon:require("../../../assets/images/ico2.png")
         },{
          title:"PAY BILLS",
          route:'bills',
         icon:require("../../../assets/images/ico3.png")
         },{
          title:"SAVINGS",
          route:'savings',
         icon:require("../../../assets/images/ico4.png")
         },{
          title:"LOANS",
          route:'loans',
         icon:require("../../../assets/images/ico5.png")
         }
      ];
  
    return (
        <CreditCard 
        style={{width,borderWidth:0,backgroundColor:"#3D4B5E",marginVertical:10,height:180}}
        >
         <WhiteText style={{fontWeight:"bold"}}>Quick Action</WhiteText>
         <View style={{flexDirection:"row"}}>
         {quickActionButtons.map((a,i)=>{
             return  <View style={{flexDirection:"column",flex:1,margin:5,justifyContent:"center",alignItems:"center"}}>
               <TouchableOpacity 
               onPress={()=>{
                navigation?.navigate(a.route)
               }}
               style={{flexDirection:"column",borderRadius:5,marginVertical:10,paddingHorizontal:5,backgroundColor:"rgb(82,93,110)",height:80,width:"100%",justifyContent:"center",alignItems:"center"}}>
          <Image 
       source={a.icon}
       style={{width:40,height:40}}
       resizeMode="contain"
       />
          </TouchableOpacity>
       <WhiteText style={{fontSize:12}}>{a.title}</WhiteText>
          </View>
         })}
         </View>
        </CreditCard>
  )
}

export default QuickActionSection;