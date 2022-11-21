import { StyleSheet, Text, View,Image,Animated } from 'react-native'
import React from 'react'
import {connect} from 'react-redux';
import styles from '../../../includes/styles';
import FadeIn from '../../../components/fadeIn';
import { ScreenComponentType } from '../../../includes/types';
import LoaderView from '../../../components/loader';
const FlashContent = ({Reducer,navigation}:ScreenComponentType) => {
  return (
    <View style={[styles.container,{justifyContent:"center",alignItems:"center"}]}>
 <Image
style={[styles.backgroundImage,{opacity:0.1}]}
source={require("../../../assets/images/appbck.png")}
resizeMode="stretch"
        />
  <FadeIn style={{width:100,height:100,justifyContent:"center",alignItems:"center",overflow:"hidden",borderRadius:15,marginBottom:16}}>
  <Image 
  style={{width:100,height:100}}
  source={require("../../../assets/images/logo.png")}
  resizeMode="contain"
 />
 </FadeIn>
 <Animated.View style={[styles.textWrapper,{alignItems:"center",width:"75%",justifyContent:"center",marginBottom:20}]}>
 {String(`Welcome to Movie Listing app, an assessment app build by Marshall Ekene.`).split(" ").map((a,i)=>{
 return ["Movie","Listing"].includes(a)?<Text key={i} style={[styles.heading2,{fontSize:14}]}> {a}</Text>:<Text key={i} style={styles.subheading}> {a}</Text>
 })}
 </Animated.View>
 <LoaderView 
 loading={true}
 message="Please wait..."
 />
 </View>
  )
}
const mapDispatchToProps = (state:any)=>{
    return state;
  }
export default connect(mapDispatchToProps)(FlashContent);
  