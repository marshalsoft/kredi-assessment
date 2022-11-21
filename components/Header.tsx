import { StyleSheet, Text, View,Image,Animated, TouchableOpacity } from 'react-native'
import React from 'react'
import {connect} from 'react-redux';
import styles from '../includes/styles';
import { ScreenComponentType } from '../includes/types';
const HeaderContent = ({Reducer,navigation,showlogin = true,title,backbtn = false}:ScreenComponentType) => {
  return (<View style={styles.headerContainer}>
<View style={{padding:15,flexDirection:"row",alignItems:"center"}}>
<View style={{flex:1,flexDirection:"row",alignItems:"center"}}>
{backbtn?<TouchableOpacity
onPress={()=>{
    navigation.goBack()
}}
style={{flexDirection:"row",alignItems:"center"}} ><Image 
        style={{width:20,height:20,tintColor:"white"}}
        source={require("../assets/images/backarrow.png")}
        resizeMode="contain"
        />
        </TouchableOpacity>:null}
        <Text style={[styles.whiteText,{fontWeight:"bold",marginLeft:5}]}>{title}</Text>
       
</View>
{showlogin?<View style={{flexDirection:"row"}}>
<TouchableOpacity >
<Text style={[styles.whiteText,{fontSize:12}]}>Log In</Text>
</TouchableOpacity>
<TouchableOpacity 
style={[styles.headerDarkBck,{paddingHorizontal:16,marginHorizontal:10,paddingVertical:3,minHeight:5}]}
>
<Text style={[styles.whiteText,{fontSize:12}]}>Start your free trial</Text>
</TouchableOpacity>
</View>:null}
</View>
  </View>)
}
export default HeaderContent;