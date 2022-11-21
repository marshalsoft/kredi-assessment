import { View, Text,ActivityIndicator } from 'react-native'
import React from 'react'
import styles from '../includes/styles';

const LoaderView = ({loading = false,message = "loading...",list = []}) => {
return (<>{loading?<View style={{flexDirection:"row",paddingHorizontal:10,alignItems:"center",justifyContent:"flex-start"}}>
<ActivityIndicator />
<Text style={{color:"black",fontSize:10,marginLeft:5}}>{message}</Text>
</View>:list.length == 0?<View style={styles.alert}>
    <Text style={styles.alertText}>Item not found.</Text>
</View>:null}</>)
}

export default LoaderView;
