import { View, Text,TouchableOpacity, Image} from 'react-native'
import React from 'react'
import CONSTANTS from '../includes/constants'
import { ButtonProps } from '../includes/types'

const FingerPrint = (onPress:ButtonProps) => {
  return (
    <TouchableOpacity
    style={{flexDirection:"column",justifyContent:"center",alignItems:"center"}}
    >
  <Image 
source={CONSTANTS.IMAGES.FingerPrint}
resizeMode="contain"
style={{width:80,height:80,margin:20}}
/>
<Text style={{fontSize:12,fontWeight:"bold",color:"black"}}>Use Touch ID</Text>
</TouchableOpacity>
  )
}

export default FingerPrint