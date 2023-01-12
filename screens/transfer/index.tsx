import React, {useRef} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
  Alert
} from 'react-native';
const {width} = Dimensions.get("screen")
import styles from '../../includes/styles';
import CardSection from '../home/components/CardSection';
import {DescriptionText,OrangeText,OrangeButton,BaseInput,BaseLayout,InnerContainer,HeaderText,CreditCard,Avatar, TextWrapper, WhiteText, BlackText} from '../../components';
import {ScreenComponentType,JsonDataSets, items, LoaderProps} from '../../includes/types';
import CONSTANTS from '../../includes/constants';
import MessageBoxComponent from './components/messageBox';
import TransferOptionComponent from './components/transferOption';
import * as y from 'yup';
import { Formik } from 'formik';
import BottomSheetComponent, { BottomSheetItemProps, ContactProps, CountryProps } from '../../components/BottomSheet';
import Icons from '../../includes/icons';
import LoaderView from '../../components/loader';
import { AddComma } from '../../includes/myfunctions';
import TransferSuccessScreen from './components/success';
const formSchema = y.object({
    amount:y.string().required('Amount is required').max(11),
    account_number:y.string().required('Account number is required').max(11),
    bank:y.string().required('Bank is required')
   })
interface FormDataProps {
    amount:string;
    account_number:string;
    bank:string;
    ref:string;
}
const TransferScreen = ({navigation,Reducer,route}:ScreenComponentType) => {
    const [formData,SetformData] = React.useState<FormDataProps>({
        amount:"",
        account_number:"",
        bank:"",
        ref:""
      });
    const [loading,Setloading] = React.useState<LoaderProps>({
        status:false,
        message:""
      });
      if(loading.message == "success")
      {
        return <TransferSuccessScreen
        navigation={navigation}
        amount={parseFloat(formData.amount)}
        bank={formData.bank}
        ref={formData.ref}
         />
      }
  return (
    <BaseLayout 
    backgroundColor={CONSTANTS.COLORS.dark}
    >
      <View style={{flexDirection:"row",paddingTop:20,paddingHorizontal:20,justifyContent:"center",alignItems:"center"}} >
        <Avatar 
        source={{uri:CONSTANTS.IMAGES.Avatar}}
        />
        <View style={{justifyContent:"center",alignItems:"center",flex:1}}
        >
            <WhiteText style={{fontSize:23,fontWeight:"bold"}}>Transfer </WhiteText>
        </View>
        <TouchableOpacity style={{width:50}}>
        <Image 
            source={CONSTANTS.IMAGES.BELL}
            style={{width:40,height:40}}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
      <ScrollView 
 keyboardShouldPersistTaps="always"
 showsVerticalScrollIndicator={false}
 style={{width}}
 >
 <View style={{flexDirection:"column"}} >
 <TextWrapper style={{paddingHorizontal:20,paddingVertical:10}}>
  <WhiteText >Choose Account </WhiteText>
  <WhiteText style={{fontWeight:"bold"}}>{Reducer?.firstname}</WhiteText>
 </TextWrapper>
 <CardSection />
 <InnerContainer 
 style={{flexDirection:"column",minHeight:600}}
  >
    <View style={{padding:20}}>
 <MessageBoxComponent />
 <TransferOptionComponent />
 </View>
 <InnerContainer 
 style={{backgroundColor:"white",padding:20}}
 >
 <Formik
     initialValues={{
      amount:"",
      account_number:"",
      narration:"",
      bank:""
     }}
     onSubmit={values =>{
      Setloading({
        status:true
      })
      SetformData(values)
      setTimeout(()=>{
        Setloading({
          status:false,
          message:"success"
        })
       
      },1000)

     }}
     validationSchema={formSchema}
     >
     {({ handleChange, handleBlur, handleSubmit,setFieldValue, values,errors,touched,setErrors}) => (<View 
     style={{flexDirection:"column"}}
      >
      <HeaderText style={{color:"black",fontSize:20}}>Recepient's details</HeaderText>
      <BaseInput
      max={11}
      label="Amount"
      placeholder={CONSTANTS.CURRENCY.SYMBOLS.naira}
      value={AddComma(values.amount)}
      onChangeText={(d)=>setFieldValue("amount",d)}
      keyboardType="phone-pad"
      error={errors.amount && touched.amount ?{message:errors.amount}:{}}
      />
      <BottomSheetComponent 
      type='contact'
       returnValue={(d:BottomSheetItemProps)=>{
        setFieldValue("account_number",d.number);
        setFieldValue("bank",d.bank)
       }}
      ></BottomSheetComponent>
       <BaseInput
        max={11}
      label="Account number"
      placeholder=''
      value={values.account_number}
      onChangeText={(d)=>setFieldValue("account_number",d)}
      keyboardType="phone-pad"
      error={errors.account_number && touched.account_number ?{message:errors.account_number}:{}}
      />
      <BottomSheetComponent 
      type='country'
      title="Select a bank"
       label="Bank"
       returnValue={(d:BottomSheetItemProps)=>setFieldValue("bank",d.bank)}
      >
      {values.bank && <BlackText style={{width:"100%"}}>{values.bank}</BlackText>}
      <Icons.AntDesign name="down" style={{position:"absolute",right:10,fontSize:20,color:CONSTANTS.COLORS.dark}}/>
      
      </BottomSheetComponent>
      <BaseInput
       max={100}
      label="Narration (optional)"
      placeholder=''
      value={values.narration}
      onChangeText={(d)=>setFieldValue("narration",d)}
      keyboardType="default"
      error={errors.narration && touched.narration ?{message:errors.narration}:{}}
      />
      
      <OrangeButton 
      onPress={handleSubmit}
      style={{width:"100%",marginLeft:0,marginRight:0,marginTop:30,marginBottom:30}}
      >
        <WhiteText >
          Next
        </WhiteText>
      </OrangeButton>
      </View>)}
      </Formik>
</InnerContainer>
</InnerContainer>
 </View>
</ScrollView>
{loading && <LoaderView 
status={loading.status}
/>}
    </BaseLayout>
  );
};
export default TransferScreen;