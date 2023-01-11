import { StyleSheet,TouchableOpacity, Text, View,Image,Animated,FlatList, ScrollView, Alert } from 'react-native'
import React from 'react'
import {connect} from 'react-redux';
import styles from '../../../includes/styles';
import {ComponentType,JsonDataSets, items, ScreenComponentType} from '../../../includes/types';
import {BaseLayout} from '../../../components';

const NetworkContent = ({Reducer,navigation,route}:ScreenComponentType) => {
    const [loading,Setloading] = React.useState(true);
    React.useEffect(()=>{
  },[])
    return (<BaseLayout >
      <Text style={{color:"red"}}>no network screen</Text> 
     </BaseLayout>)
}
     const mapDispatchToProps = (state:any)=>{
        return state;
      }
    export default connect(mapDispatchToProps)(NetworkContent);
      