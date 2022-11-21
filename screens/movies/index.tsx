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
import {ComponentType} from '../../includes/types';
import Header from '../../components/Header';
import Content from './components/content';

const MoviesScreen  = ({navigation,Reducer,route}:ComponentType) => {

  return (
    <View style={styles.container}>
     <Header
      title='Movies'
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
export default MoviesScreen;