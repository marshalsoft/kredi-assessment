import { StyleSheet,TouchableOpacity, Text, View,Image,Animated,FlatList, ScrollView, Dimensions } from 'react-native'
import React from 'react'
import {connect} from 'react-redux';
import styles from '../includes/styles';
import {ComponentType,JsonDataSets, items,ScreenComponentType} from '../includes/types';
import Header from './Header';
const {width,height} = Dimensions.get("screen");
const AppContentComponent = ({Reducer,navigation,children,showHeader}:ScreenComponentType) => {
 
    return (<View 
      style={{flex:1,flexDirection:"column"}}
      >
   {showHeader && <Header />}
    <View style={{flexDirection:"column",flex:1}}>
    {children}
     </View>
     </View>)
}
     const mapDispatchToProps = (state:any)=>{
        return state;
      }
    export default connect(mapDispatchToProps)(AppContentComponent);
      