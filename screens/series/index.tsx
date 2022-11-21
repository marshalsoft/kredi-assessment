import React, {type PropsWithChildren} from 'react';
import {
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
import Header from '../../components/Header';
const SeriesScreen = ({navigation,Reducer,route}:ScreenComponentType) => {

  return (
    <View style={styles.container}>
     <Header
      title='Series'
      Reducer={Reducer}
      navigation={navigation}
      showlogin={true}
      route={route}
      backbtn={true}
      />
      <Content 
      Reducer={Reducer}
      navigation={navigation}
      route={route}
      />
    </View>
  );
};
export default SeriesScreen;