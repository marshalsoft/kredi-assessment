import { StyleSheet, Text, View,Image,Animated, TouchableOpacity, Linking } from 'react-native'
import React from 'react'
import {connect} from 'react-redux';
import styles from '../includes/styles';
import { ComponentType } from '../includes/types';
const FooterContent = ({Reducer,navigation}:ComponentType) => {
  return (<View style={[styles.headerDarkBck,{flexDirection:"column",paddingHorizontal:16,paddingVertical:10}]}>
<Text style={[styles.whiteText,{fontSize:10}]} >Copyright © 2022 Demo Streaming All rights reserved.</Text>
<View style={{flexDirection:"row"}}>
{[
 {logo:require("../assets/images/fb.png"),url:"https://www.facebook.com/AwabahNigeria"},   
 {logo:require("../assets/images/tw.png"),url:"https://www.twitter.com"},   
 {logo:require("../assets/images/inst.png"),url:"https://www.instagram.com"}   
].map((a,i)=><TouchableOpacity 
onPress={()=>{
Linking.openURL(a.url)
}}
key={i}
style={{padding:10}}
>
<Image 
        style={{width:25,height:25}}
        source={a.logo}
        resizeMode="contain"
        /> 
</TouchableOpacity>)}
</View>
  </View>)
}
export default FooterContent;