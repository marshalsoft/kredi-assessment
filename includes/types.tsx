import React, { VoidFunctionComponent } from 'react';
import {
  KeyboardTypeOptions,
  StyleProp,
  TextStyle,
  ImageStyle,
  ViewStyle} from 'react-native';


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
    firstname?:string;
  }
  export interface LoaderProps {
    status?:boolean;
    message?:string
  }
  export interface ScreenComponentType {
    title?:string;
    label?:string;
    error?:string;
    navigation?:NavigationProps;
    Reducer?:Reducers;
    route?:any;
    backbtn?:boolean;
    children?:React.ReactNode;
    showHeader?:boolean;
    store?:any;
    backgroundColor?:string
  }
  
  export interface ComponentType {
    navigation?:NavigationProps;
    Reducer?:Reducers;
    route?:any;
    children?:React.ReactNode;
  }
  export interface  ButtonProps {
    onPress:()=>void
  }
  
export type StyleType = TextStyle | ViewStyle | ImageStyle;

  export interface items {
    description:string;
    images:PosterArt; 
    programType:string;
    releaseYear: number;
    title: string;
}
export interface HistoryItemProps  {
  memo:string;
  date:string;
  amount:number;
  currency:string;
  placeholder:boolean;
  status?:string;
  onPress?:()=>void;
}
export interface CardItemProps {
  brand:string;
  amount:number; 
  number:string;
  expiry: string;
  currency:string;
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
  
  export type Autocomplete =
  | "birthdate-day"
  | "birthdate-full"
  | "birthdate-month"
  | "birthdate-year"
  | "cc-csc"
  | "cc-exp"
  | "cc-exp-day"
  | "cc-exp-month"
  | "cc-exp-year"
  | "cc-number"
  | "email"
  | "gender"
  | "name"
  | "name-family"
  | "name-given"
  | "name-middle"
  | "name-middle-initial"
  | "name-prefix"
  | "name-suffix"
  | "password"
  | "password-new"
  | "postal-address"
  | "postal-address-country"
  | "postal-address-extended"
  | "postal-address-extended-postal-code"
  | "postal-address-locality"
  | "postal-address-region"
  | "postal-code"
  | "street-address"
  | "sms-otp"
  | "tel"
  | "tel-country-code"
  | "tel-national"
  | "tel-device"
  | "username"
  | "username-new"
  | "off"
  | undefined;