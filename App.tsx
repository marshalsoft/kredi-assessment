import React, {FC} from 'react';
import {
  BackHandler,
  Alert,
  DeviceEventEmitter
} from 'react-native';
import DashboardScreen from './screens/dashboard/index';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator,CardStyleInterpolators } from '@react-navigation/stack';
import {ScreenComponentType} from './includes/types';
const navigationRef:any = React.createRef();
const Stack = createStackNavigator();

const AppStack  = (props:ScreenComponentType) =>{

  return(<Stack.Navigator
    initialRouteName='dashboard'
    >
      <Stack.Screen
        name="dashboard"
        component={DashboardScreen}
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
export default AppStack;