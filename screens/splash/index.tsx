import React, {FC} from 'react';
import {
 Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import styles from '../../includes/styles';
import {ScreenComponentType} from '../../includes/types';
import Content from './components/content';


const SplashScreen = ({navigation,Reducer}:ScreenComponentType) => {
   
    React.useEffect(()=>{
    setTimeout(()=>{
        navigation.reset({
            index:0,
            routes:[
                {name:"Home"}
            ]
        })
    },2000)
   },[])
  return (
    <View style={styles.container}>
   <Content
      title='flash screen'
      navigation={navigation}
      Reducer={Reducer}
      />
    </View>
  );
};
export default SplashScreen;