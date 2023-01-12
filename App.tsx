import React, {FC} from 'react';
import {
  BackHandler,
  Alert,
  DeviceEventEmitter
} from 'react-native';
import HomeScreen from './screens/home/index';
import IntroScreen from './screens/intro/index';
import OnboardingScreen from './screens/onboarding/index';
import TransactionScreen from './screens/history/index';
import TransactionDetailScreen from './screens/history/details';
import TransferScreen from './screens/transfer';

import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator,CardStyleInterpolators } from '@react-navigation/stack';
import {ScreenComponentType} from './includes/types';
import LoginScreen from './screens/login';

const Stack = createStackNavigator();

const AppStack  = (props:ScreenComponentType) =>{
  return(<NavigationContainer>
    <Stack.Navigator
    initialRouteName='intro'
    >
      <Stack.Screen
        name="intro"
        component={IntroScreen}
        options={{
          headerShown: false,
          headerTintColor:'orange',
          headerStyle:{
            backgroundColor:'black'
          },
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
        }}
      />
      <Stack.Screen
        name="home"
        component={HomeScreen}
        options={{
          headerShown: false,
          headerTintColor:'orange',
          headerStyle:{
            backgroundColor:'black'
          },
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
        }}
      />
    <Stack.Screen
        name="onboarding"
        component={OnboardingScreen}
        options={{
          headerShown: false,
          headerTintColor:'orange',
          headerStyle:{
            backgroundColor:'black'
          },
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
        }}
      />
      <Stack.Screen
        name="userlogin"
        component={LoginScreen}
        options={{
          headerShown: false,
          headerTintColor:'orange',
          headerStyle:{
            backgroundColor:'black'
          },
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
        }}
      />
      <Stack.Screen
        name="transactions"
        component={TransactionScreen}
        options={{
          headerShown: false,
          headerTintColor:'orange',
          headerStyle:{
            backgroundColor:'black'
          },
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
        }}
      />
      <Stack.Screen
        name="transaction_details"
        component={TransactionDetailScreen}
        options={{
          headerShown: false,
          headerTintColor:'orange',
          headerStyle:{
            backgroundColor:'black'
          },
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
        }}
      />
      
      <Stack.Screen
        name="transfer"
        component={TransferScreen}
        options={{
          headerShown: false,
          headerTintColor:'orange',
          headerStyle:{
            backgroundColor:'black'
          },
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
        }}
      />
    </Stack.Navigator>
    </NavigationContainer>)
}
export default AppStack;