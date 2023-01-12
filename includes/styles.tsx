import React, {type PropsWithChildren} from 'react';
import {
  StyleSheet,
  useColorScheme,
  Dimensions
} from 'react-native';
const {width,height} = Dimensions.get("screen")
const styles = StyleSheet.create({
  slideritems:{
    backgroundColor:"white",
    width,
    height,
    justifyContent:"center",
    alignItems:"center"
  },
    iconButton:{
        height: 40,
        width: 40,
        borderRadius: 0,
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconbutton: {
        position: 'absolute',
        right: 10,
        top: 4,
      },
      errorMessage: {
        marginTop: 8,
        fontSize: 12,
        color: '#DC4437',
      },
    inputWrapper:{
        marginTop: 24
    },
    input:{
        padding: 0,
        color: '#333333',
        fontSize: 16,
        lineHeight: 18,
        flex: 1,
        borderRadius: 6,
        backgroundColor: '#F7F7F7',
        paddingLeft: 16,
        height: 48,
        position: 'relative',
    },
    labelStyle: {
        fontSize: 12,
        lineHeight: 18,
        color: '#262626',
        marginBottom: 4
    }
})
export default styles;