import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { Children } from 'react'
import CONSTANTS from '../../../includes/constants';
interface ButtonProps{
    onPress?:()=>void;
    position?: 'left' | 'right';
    children?:React.ReactNode;
}
const NavButton = ({position,children,onPress}:ButtonProps) => {
    const buttonStyle:any = position == 'left'?{padding:10,position:"absolute",bottom:CONSTANTS.POSITION.ButtonBottomPosition,left:25,flexDirection:"row",alignItems:"center",justifyContent:"center"}:{padding:10,position:"absolute",bottom:CONSTANTS.POSITION.ButtonBottomPosition,right:25,flexDirection:"row",alignItems:"center",justifyContent:"center"}
  return (
    <TouchableOpacity
    style={{...buttonStyle}}
    onPress={onPress}
    >
    {children}
    </TouchableOpacity>
  )
}

export default NavButton
