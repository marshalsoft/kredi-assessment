import React, {useState, type PropsWithChildren} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
const {width} = Dimensions.get("screen")
import styles from '../../../includes/styles';
import {DescriptionText,OrangeText,OrangeButton,BaseInput,BaseLayout,InnerContainer,HeaderText,CreditCard,Avatar, TextWrapper, WhiteText, BlackText} from '../../../components';
import {ScreenComponentType,JsonDataSets, items} from '../../../includes/types';
import CONSTANTS from '../../../includes/constants';
import Icons from '../../../includes/icons';
interface OptionlistProps {
    title:string;
    route:string;
    icon:number;
    textColor:string;
    backgroundColor:string;
}

const TransferOptionComponent = ({navigation,Reducer,route}:ScreenComponentType) => {
  const [optionlist,setOptionlist] = useState<OptionlistProps[]>([
{
    title:"Transfer between own bank",
    route:"credit_card_request",
    icon:require("../../../assets/images/tico1.png"),
    textColor:"black",
    backgroundColor:CONSTANTS.COLORS.light
},
{
    title:"Transfer to Kredi account",
    route:"credit_card_request",
    icon:require("../../../assets/images/tico2.png"),
    textColor:"white",
    backgroundColor:CONSTANTS.COLORS.dark
},
{
    title:"Other banks transfer",
    route:"credit_card_request",
    icon:require("../../../assets/images/tico3.png"),
    textColor:"black",
    backgroundColor:CONSTANTS.COLORS.light
}
  ])
  return (<View style={{flexDirection:"column"}}>
    <BlackText style={{fontSize:16,fontWeight:"bold",marginBottom:5,marginTop:10}}>Choose Transfer Type</BlackText>
    <ScrollView 
    horizontal
    style={{height:100}}
  >
  {optionlist.map((a,o,self)=><TouchableOpacity 
  style={{padding:5,backgroundColor:a.backgroundColor,borderRadius:5,flexDirection:"column",height:100,width:120,borderColor:"#444",borderWidth:0.5,marginRight:10}}
  >
<Image 
source={a.icon}
style={{width:30,marginHorizontal:5}}
resizeMode="contain"
/>
<View style={{flexDirection:"column",paddingHorizontal:2,justifyContent:"center"}}>
<BlackText style={{fontSize:12,color:a.textColor}}>{a.title}</BlackText>
</View>
  </TouchableOpacity>)}
  </ScrollView>
  </View>)
}
export default TransferOptionComponent;