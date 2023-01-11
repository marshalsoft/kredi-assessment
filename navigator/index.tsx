import { StyleSheet, Text, View, } from 'react-native';
import React from 'react'
export interface RNProps  { 
    children: React.ReactNode
 }
const RouterScreen = (props:RNProps) => {
  return (
    <View>
      {props.children}
    </View>
  )
}

export default RouterScreen;