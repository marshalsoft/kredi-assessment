import React, {FC} from 'react';
import {
  BackHandler,
  Alert,
  DeviceEventEmitter
} from 'react-native';
import FlashScreen from './screens/splash/index';
import HomeScreen from './screens/home/index';
import SeriesScreen  from './screens/series/index';
import MovieScreen  from './screens/movies/index';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator,CardStyleInterpolators } from '@react-navigation/stack';
import {ScreenComponentType} from './includes/types';
const navigationRef:any = React.createRef();
const Stack = createStackNavigator();

const AppStack:FC<ScreenComponentType>  = (props) =>{
React.useEffect(():any=>{
  BackHandler.addEventListener("hardwareBackPress",()=>{
    const cutRouteName = navigationRef.current.getCurrentRoute().name;
    const list = ["Home"];
    if(list.indexOf(cutRouteName) != -1)
    {
      Alert.alert("Oops!","Are you sure you want to exit?",[
        {text:"Yes",onPress:()=>{
          BackHandler.exitApp();
        }},
        {text:"No",onPress:()=>{
          
        }}
      ])
      return true;
    }
  })
  return null;
},[])
  return<NavigationContainer 
  ref={navigationRef}
  >
    <Stack.Navigator
    initialRouteName='flash'
    >
     <Stack.Screen
        name="flash"
        component={FlashScreen}
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
        name="Home"
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
        name="Movies"
        component={MovieScreen}
        options={{
          headerShown: false,
          headerTintColor:'orange',
          headerStyle:{
            backgroundColor:'black'
          },
          cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS
        }}
      />
         
      <Stack.Screen
        name="Series"
        component={SeriesScreen}
        options={{
          headerShown: false,
          headerTintColor:'orange',
          headerStyle:{
            backgroundColor:'black'
          },
          cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS
        }}
      />
    </Stack.Navigator>
</NavigationContainer>}
export default AppStack;