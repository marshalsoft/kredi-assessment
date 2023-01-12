import React, {useEffect, useState, type PropsWithChildren} from 'react';
import {
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
import { getJsonData } from '../../../includes/myfunctions';
import styles from '../../../includes/styles';
import Header from '../../../components/Header';
import {BaseLayout,Avatar, TextWrapper, WhiteText} from '../../../components';
import {ScreenComponentType,JsonDataSets, items, CardItemProps,} from '../../../includes/types';
import CONSTANTS from '../../../includes/constants';
import Carousel from '../../../components/Carousel';
const CardSection = ({navigation,Reducer,route}:ScreenComponentType) => {
  const [cardlist,setCardlist] = useState<CardItemProps[]>([
    {
        number:"**** **** **** 4784",
        brand:"VISA",
        currency:CONSTANTS.CURRENCY.SYMBOLS.naira,
        expiry:"12/23",
        amount:90000.00
    },
    {
        number:"**** **** **** 2353",
        brand:"MASTER",
        currency:CONSTANTS.CURRENCY.SYMBOLS.naira,
        expiry:"01/24",
        amount:34000.00
    }
    ,
    {
        number:"**** **** **** 2353",
        brand:"MASTER",
        currency:CONSTANTS.CURRENCY.SYMBOLS.naira,
        expiry:"01/24",
        amount:34000.00
    }
  ])
    useEffect(()=>{

  },[])
  return (<Carousel 
    list={cardlist}
    />)
}
export default CardSection;