import { StyleSheet, Text, View,Alert,BackHandler } from 'react-native';
import React, { useState } from 'react';
import LoginScreen from '../login/index';
import NetScreen from '../network/index';
import App from '../../App';
import { useEffect } from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { ScreenComponentType } from '../../includes/types';
import { useNetInfo } from "@react-native-community/netinfo";
import { AsyncStorage } from 'react-native';
const navigationRef = React.createRef();

const IdleScreen = (props:ScreenComponentType) => {
  const [isLoggedIn,setIsLoggedIn] = useState(false);
  const isConnected = useNetInfo();
  React.useEffect(():any=>{
    BackHandler.addEventListener("hardwareBackPress",():any=>{
    //   const cutRouteName = navigationRef.current.getCurrentRoute().name;
    //   const list = ["Home"];
    //   if(list.indexOf(cutRouteName) != -1)
    //   {
    //     Alert.alert("Oops!","Are you sure you want to exit?",[
    //       {text:"Yes",onPress:()=>{
    //         BackHandler.exitApp();
    //       }},
    //       {text:"No",onPress:()=>{
            
    //       }}
    //     ])
    //     return true;
    //   }
    })
   
    setTimeout(()=>{
      setIsLoggedIn(false)
    },6000)
  },[])
  return ( <View style={{flex:1,flexDirection:"column"}}>
   <NavigationContainer 
  //  ref={navigationRef}
  >
      {!isConnected?<NetScreen />:isLoggedIn?<App 
      />:<LoginScreen 
      />}
      </NavigationContainer> 
    </View>)
}

export default IdleScreen;