import React, {type PropsWithChildren} from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { getJsonData } from '../../includes/myfunctions';
import styles from '../../includes/styles';
import Header from '../../components/Header';
import Content from '../../components/content';
import Footer from '../../components/footer';
import {ScreenComponentType,JsonDataSets, items} from '../../includes/types';
const HomeScreen = ({navigation,Reducer,route}:ScreenComponentType) => {

  return (
    <View style={styles.container}>
      <Header
      title='DEMO Streaming'
      Reducer={Reducer}
      navigation={navigation}
      showlogin={true}
      route={route}
      backbtn={false}
      />
     <Content 
      Reducer={Reducer}
      navigation={navigation}
      route={route}
     />
     <Footer
     Reducer={Reducer}
     navigation={navigation}
     route={route}
     />
    </View>
  );
};
export default HomeScreen;