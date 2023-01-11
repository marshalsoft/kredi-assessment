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
import {BaseLayout} from '../../components';
import {ScreenComponentType,JsonDataSets, items} from '../../includes/types';
const DashboardScreen = ({navigation,Reducer,route}:ScreenComponentType) => {

  return (
    <BaseLayout 
    showHeader
    >
 <Text style={{color:"red"}}>Kskks</Text>
    </BaseLayout>
  );
};
export default DashboardScreen;