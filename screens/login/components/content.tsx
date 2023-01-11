import { StyleSheet,TouchableOpacity, Text, View,Image,Animated,FlatList, ScrollView, Alert } from 'react-native'
import React from 'react'
import {connect} from 'react-redux';
import styles from '../../../includes/styles';
import {ComponentType,JsonDataSets, items, ScreenComponentType} from '../../../includes/types';
import {BaseLayout,BaseInput} from '../../../components';
import CONSTANTS from '../../../includes/constants';

const LoginContent = ({Reducer,navigation,route}:ScreenComponentType) => {
    const [loading,Setloading] = React.useState(true);
    const [txetV,seTtxetV] = React.useState("");
    
    React.useEffect(()=>{
  },[])
    return (<BaseLayout 
    
    >
      <Image 
      style={{width:"100%",height:"100%",position:"absolute",top:0,left:0}}
      source={CONSTANTS.IMAGES.BACKGROUND}
      resizeMode="cover"
      />
      <View style={{flex:1,paddingHorizontal:30}}>
      <BaseInput
      label="Email address"
      placeholder='Enter your email address'
      value={txetV}
      onChangeText={(d)=>{
        seTtxetV(d)
      }}
      keyboardType="email-address"
      />
       <BaseInput
      label="Password"
      placeholder='************'
      secureTextEntry
      value=''
      onChangeText={()=>{

      }}
      keyboardType="default"
      error={{message:"hhhh"}}
      />
      </View>
     </BaseLayout>)
}
     const mapDispatchToProps = (state:any)=>{
        return state;
      }
    export default connect(mapDispatchToProps)(LoginContent);
      