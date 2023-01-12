import { StyleSheet,TouchableOpacity, Text, View,Image,Animated,FlatList, ScrollView, Dimensions, KeyboardAvoidingView, SafeAreaView, StatusBar } from 'react-native'
import React from 'react'
import {connect} from 'react-redux';
import styles from '../includes/styles';
import {ComponentType,JsonDataSets, items,ScreenComponentType} from '../includes/types';
import Header from './Header';
import CONSTANTS from '../includes/constants';
const {width,height} = Dimensions.get("screen");
const AppContentComponent = ({Reducer,navigation,children,showHeader,backgroundColor}:ScreenComponentType) => {
 
    return (<SafeAreaView 
    style={{flex:1}}
    >
      <KeyboardAvoidingView 
      style={{flex:1,flexDirection:"column",backgroundColor}}
      >
   <StatusBar
    backgroundColor={CONSTANTS.COLORS.dark}
    barStyle="light-content"
    />
   {showHeader && <Header />}
    <View style={{flexDirection:"column",flex:1}}>
    {children}
     </View>
     </KeyboardAvoidingView>
     </SafeAreaView>)
}
     const mapDispatchToProps = (state:any)=>{
        return state;
      }
    export default connect(mapDispatchToProps)(AppContentComponent);
      