import { StyleSheet,TouchableOpacity, Text, View,Image,Animated,FlatList, ScrollView, Alert } from 'react-native'
import React from 'react'
import {connect} from 'react-redux';
import styles from '../../includes/styles';
import {ComponentType,JsonDataSets, items, ScreenComponentType} from '../../includes/types';
import {BaseLayout,BaseInput,HeaderText} from '../../components';
import CONSTANTS from '../../includes/constants';
import Slider from "./components/slider";
const SplashScreen = ({Reducer,navigation,route}:ScreenComponentType) => {
    const [loading,Setloading] = React.useState(true);
    const [txetV,seTtxetV] = React.useState("");
    React.useEffect(()=>{
  },[])
  return (<BaseLayout >
<Slider 
gotologin={()=>{
  navigation?.reset({
    index:0,
    routes:[{name:'onboarding'}]
  })
}}
Reducer={Reducer}
route={route}
/>
  </BaseLayout>)
}

export default SplashScreen;