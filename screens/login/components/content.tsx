import { StyleSheet,TouchableOpacity, Text, View,Image,Animated,FlatList, ScrollView, Alert } from 'react-native'
import React from 'react'
import {connect} from 'react-redux';
import styles from '../../../includes/styles';
import {ComponentType,LoaderProps,JsonDataSets, items, ScreenComponentType} from '../../../includes/types';
import {BaseLayout,BlackText,InnerContainer,BackButton,TextWrapper,BaseInput,HeaderText, WhiteText, DescriptionText, OrangeText, OrangeButton} from '../../../components';
import CONSTANTS from '../../../includes/constants';
import * as y from 'yup';
import { Formik } from 'formik';
import FingerPrint from '../../../components/FingerPrint';
import LoaderView from '../../../components/loader';
const formSchema = y.object({
  phone_number:y.string().required('Phone number is required'),
  password:y.string().required('Password is required.') 
  .min(8, 'Password is too short - should be 8 chars minimum.')
  .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,"Password must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character")
  })
const LoginContent = ({Reducer,navigation,route}:ScreenComponentType) => {
    const [loading,Setloading] = React.useState<LoaderProps>({
      status:false,
      message:""
    });
    const [txetV,seTtxetV] = React.useState("");
    
    React.useEffect(()=>{
  },[])
    return (<BaseLayout 
    
    >
      <Image 
      style={{width:"100%",height:"100%",position:"absolute",top:0,left:0}}
      source={CONSTANTS.IMAGES.BACKGROUND}
      resizeMode="cover"
      />
      <View style={{flex:1,backgroundColor:"#28374C"}}>
      <View style={{flexDirection:"row",marginVertical:30}} >
      <BackButton
      style={{marginLeft:10}}
      onPress={()=>{
        navigation?.goBack();
      }}
      color='white'
      
      />
      </View>
      <WhiteText style={{fontSize:20,fontWeight:"bold",marginHorizontal:20,marginVertical:20}}>Login to  Account</WhiteText>
      <Formik
     initialValues={{
      phone_number:"",
      password:"",
     }}
     onSubmit={values =>{
      Setloading({
        status:true
      })
      setTimeout(()=>{
        Setloading({
          status:false
        })
        if(String(values.phone_number).trim() == "08123456789" && String(values.password).trim() == "Admin@123" )
        {
        return navigation?.reset({
          index:0,
          routes:[{name:'home'}]
        })
        }
        Alert.alert(`Invalid login credentials`,`\n for test purpose you need to use this \Phone number: 08123456789\nPassword: Admin@123 \nas login credentials.`,[
            {text:"Ok",onPress:()=>{}}
          ])
      },2000)

     }}
     validationSchema={formSchema}
     >
     {({ handleChange, handleBlur, handleSubmit,setFieldValue, values,errors,touched,setErrors}) => (<InnerContainer 
     style={{padding:20}}
      >
      <HeaderText style={{color:"black",fontSize:20}}>Welcome back</HeaderText>
      <DescriptionText style={{color:"#979EAB"}}>Login with your Kredi Bank details.</DescriptionText>
      <BaseInput
      max={11}
      label="Enter phone number"
      value={values.phone_number}
      onChangeText={(d)=>setFieldValue("phone_number",d)}
      keyboardType="phone-pad"
      error={errors.phone_number && touched.phone_number ?{message:errors.phone_number}:{}}
      />
       <BaseInput
        max={50}
      label="Enter your password"
      placeholder='************'
      secureTextEntry={true}
      value={values.password}
      onChangeText={(d)=>setFieldValue("password",d)}
      keyboardType="default"
      leftIconStyle='black'
      error={errors.password && touched.password ?{message:errors.password}:{}}
      />
      <TouchableOpacity 
      
      style={{alignSelf:"flex-end",padding:15}}
      >
        <OrangeText style={{fontWeight:"normal"}}>Forgot password?</OrangeText>
      </TouchableOpacity>
      <OrangeButton 
      onPress={handleSubmit}
      style={{width:"100%",marginLeft:0,marginRight:0}}
      >
        <WhiteText >
          Log In
        </WhiteText>
      </OrangeButton>
      <FingerPrint 
      onPress={()=>{

      }}
      />
      <TextWrapper 
      style={{justifyContent:"center",marginTop:50}}

      >
<BlackText style={{color:"#B7B7B7"}}>Have no account yet? </BlackText>
<TouchableOpacity >
<OrangeText>Create</OrangeText>
</TouchableOpacity>
      </TextWrapper>
      </InnerContainer>)}
      </Formik>
      </View>
      {loading?.status && <LoaderView />}
     </BaseLayout>)
}
     const mapDispatchToProps = (state:any)=>{
        return state;
      }
    export default connect(mapDispatchToProps)(LoginContent);
      