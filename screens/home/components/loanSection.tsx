import { View, Text,Dimensions } from 'react-native'
import React from 'react'
import CardSection from '../components/CardSection';
import {BaseLayout,InnerContainer,CreditCard,Avatar, TextWrapper, WhiteText, BlackText} from '../../../components';
import {ScreenComponentType,JsonDataSets, items} from '../../../includes/types';
import CONSTANTS from '../../../includes/constants';
import { AddComma } from '../../../includes/myfunctions';
import ChartView from '../../../components/ChartView';

const {width} = Dimensions.get("screen");
interface BottomSecProps {
    title:string;
    value:string;
    prefix:string;
    sufix:string;
    }
    interface ChatProps {
      value:number;
      }
    const money = new Intl.NumberFormat('de-CH',
    { style:'currency', currency: 'NGN' });
    const formatedAmount = AddComma("399939");
    let lastPart = formatedAmount.split(".");
      
const LoanSection = () => {
  const data:ChatProps[] = [ {value:20}, {value:80}];
    const bottomSection:BottomSecProps[] = [
        {
         title:"Current monthly payment",
         value:"15,000",
         sufix:CONSTANTS.CURRENCY.SYMBOLS.naira,
         prefix:".00"
        },{
          title:"Interest Rate",
          value:"12.899",
          sufix:"",
          prefix:"%"
         },{
          title:"Next Pay Date",
          value:"Jan 23",
          sufix:"",
          prefix:"rd"
         },{
          title:"Payroff Date",
          value:"Dec, 2023",
          sufix:"",
          prefix:""
         }
      ];
  
    return (
    <CreditCard 
 style={{width,borderWidth:0,backgroundColor:"#3D4B5E"}}
 >
  <View style={{flexDirection:"row"}}>
    <View style={{flexDirection:"column",flex:1,height:82}}>
<WhiteText style={{fontSize:16,fontWeight:"bold",marginBottom:10}} >Loan Details</WhiteText>
<WhiteText style={{fontSize:10}} >Balance</WhiteText>
  <View style={{flexDirection:"row",flex:1}}>
    <WhiteText style={{fontSize:14}} >{CONSTANTS.CURRENCY.SYMBOLS.naira}</WhiteText>
    <WhiteText style={{fontSize:25,fontWeight:"bold"}} >{lastPart[0]}</WhiteText>
    <WhiteText style={{fontSize:14}} >.{lastPart[1]?lastPart[1]:"00"}</WhiteText>
  </View>
  </View>
  <View style={{width:80}}>
  <ChartView 
  cheight={60}
  cwidth={60}
  />
  </View>
  </View>
  <View style={{flexDirection:"row"}}>
    {bottomSection.map((a,i)=>{
      return <View style={{flexDirection:"column",flex:1,marginTop:20,paddingHorizontal:5}}>
    <WhiteText style={{fontSize:10}} >{a.title}</WhiteText>
    <View style={{flexDirection:"row"}} >
    <WhiteText style={{fontSize:10,fontWeight:"bold"}} >{a.sufix}</WhiteText>
    <WhiteText style={{fontSize:14,fontWeight:"bold"}} >{a.value}</WhiteText>
    <WhiteText style={{fontSize:10,fontWeight:"bold"}} >{a.prefix}</WhiteText>
    </View>
      </View>
    })}
  </View>
 </CreditCard>
  )
}

export default LoanSection;