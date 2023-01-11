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
import Content from './components/content';
import { createStackNavigator,CardStyleInterpolators } from '@react-navigation/stack';
const Stack = createStackNavigator();
const LoginScreen  = ({navigation,Reducer,route}:ComponentType) => {
return (<Stack.Navigator
    >
      <Stack.Screen
        name="login"
        component={Content}
        options={{
          headerShown: false,
          headerTintColor:'orange',
          headerStyle:{
            backgroundColor:'black'
          },
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
        }}
      />
    </Stack.Navigator>)
}
  
export default LoginScreen;