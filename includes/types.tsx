import React from 'react';
import {ParamListBase} from '@react-navigation/native';
import {StackNavigationProp,StackScreenProps} from '@react-navigation/stack';

export interface NavigationProps {
      addListener: Function;
      canGoBack: Function;
      dangerouslyGetParent: Function;
      dangerouslyGetState: Function;
      dispatch: Function;
      goBack: Function;
      isFocused: Function;
      jumpTo: Function;
      navigate: Function;
      pop: Function;
      popToTop: Function;
      push: Function;
      removeListener: Function;
      replace: Function;
      reset: Function;
      setOptions: Function;
      setParams: Function;
    };
 
  export interface Reducers {
    auth: string;
  }
  
  export interface ScreenComponentType {
    title:string;
    navigation:NavigationProps;
    Reducer:Reducers;
    showlogin:boolean;
    route:any;
    backbtn:boolean;
  }
  
  export interface ComponentType {
    navigation:NavigationProps;
    Reducer:Reducers;
    route:any;
  }
  export interface items {
    description:string;
    images:PosterArt; 
    programType:string;
    releaseYear: number;
    title: string;
}
export interface PosterArt {
    url:string;
    width: number;
    height: number;
}
  export interface JsonDataSets {
    total:number;
    entries:Array<items> 
  }
  