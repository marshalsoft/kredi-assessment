import React from 'react';
import {ComponentType} from '../../includes/types';
import Content from './components/content';
import { createStackNavigator,CardStyleInterpolators } from '@react-navigation/stack';
const Stack = createStackNavigator();
const NetworkScreen  = ({navigation,Reducer,route}:ComponentType) => {
return (<Stack.Navigator
    >
      <Stack.Screen
        name="nonetwork"
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
  
export default NetworkScreen;