import {
     StyleSheet, Text, View, TextInput, TextInputProps, KeyboardTypeOptions,
     StyleProp,
     TextStyle,
     ImageStyle,
     ViewStyle
} from 'react-native';
import React from 'react';
import styles from '../includes/styles';
import { Controller } from 'react-hook-form';
import IconButton from './Iconbutton';
import Icons from '../includes/icons';
import { useEffect } from 'react';
export interface BaseInputProps {
     onChangeText?: (value: string) => void;
     value: string;
     keyboardType?: KeyboardTypeOptions;
     placeholder?: string;
     inputStyle?: StyleProp<ViewStyle>;
     label?: string;
     labelStyle?: StyleProp<TextStyle>;
     containerStyle?: StyleProp<ViewStyle>;
     editable?: boolean;
     secureTextEntry?: boolean;
     error?:BaseInputErrorProps;
     leftIconStyle?: 'black'|'white';
     max?:number;
}
export interface BaseInputErrorProps {
     message?:string;
}
const BaseInput = (props: BaseInputProps) => {
     const {
          keyboardType = 'default',
          placeholder,
          inputStyle,
          label,
          editable,
          secureTextEntry,
          containerStyle,
          onChangeText,
          error,
          value,
          leftIconStyle,
          max
     } = props;
     const [showPassword, setShowPassword] = React.useState(false);
     const inputRef = React.useRef<TextInput>(null);

     function toggleShowPassword() {
          setShowPassword(!showPassword);
     }
     useEffect(()=>{
     
     },[])
    
               return (
                    <View style={[styles.inputWrapper, containerStyle]}>
                         {label && <Text style={styles.labelStyle}>{label}</Text>}
                         <View style={{minHeight:50,backgroundColor:"white",borderRadius:10,elevation:3,overflow:"hidden"}}>
                              <TextInput
                                   ref={inputRef}
                                   style={[
                                        styles.input,
                                        inputStyle
                                   ]}
                                   placeholder={placeholder}
                                   placeholderTextColor="#B3B3B3"
                                   keyboardType={keyboardType}
                                   value={value}
                                   onChangeText={(value) => {
                                        if (onChangeText) {
                                             onChangeText(value);
                                        }
                                   }}
                                   editable={editable}
                                   secureTextEntry={showPassword}
                                   returnKeyType="done"
                                   maxLength={max}
                              />
                              {secureTextEntry ? (
                                   <IconButton
                                        styles={styles.iconbutton}
                                        onPress={toggleShowPassword}
                                   >
                                        {showPassword ? (
                                             <Icons.FontAwesome size={20} name="eye-slash" color={leftIconStyle} />
                                        ) : (
                                             <Icons.FontAwesome size={20} name='eye'  color={leftIconStyle}/>
                                        )}
                                   </IconButton>
                              ) : null}
                         </View>
                         {error?.message && (
                              <Text style={styles.errorMessage}>
                                   {error.message || 'An error occured'}
                              </Text>
                         )}
                    </View>
               );

}

export default BaseInput;


