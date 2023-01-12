import { View, Text, Image, Dimensions,TouchableOpacity } from 'react-native'
import React from 'react';
import { BaseLayout,OrangeButton,WhiteText, OrangeTextButton,OrangeText,CenterView, HeaderText, DescriptionText } from '../../components';
import CONSTANTS from '../../includes/constants';
const {width,height} = Dimensions.get("screen");
import {ComponentType,JsonDataSets, items, ScreenComponentType,NavigationProps} from '../../includes/types';

const OnboardingScreen = ({navigation}:ScreenComponentType) => {
  return (<BaseLayout 
  >
<Image
style={{width,height,position:"absolute",top:0,left:0}}
source={CONSTANTS.IMAGES.SlideOne}
resizeMode="cover"
    />
    <CenterView >
      <View style={{flex:1}}></View>
    <HeaderText style={{marginVertical:20}}>Let's get started</HeaderText>
    <DescriptionText 
    style={{color:"#B2B6C1",width:"60%",textAlign:"center",marginBottom:50}}
    >Never a better time than now to  start thinking about how you manage alow your finances with ease.</DescriptionText>
   <OrangeButton
   style={{marginTop:30,marginBottom:30}}
   >
    <WhiteText>Create Account</WhiteText>
   </OrangeButton>
    <OrangeTextButton 
    onPress={()=>{
      navigation?.reset({
        index:0,
        routes:[{name:'userlogin'}]
      })
    }}
    style={{marginBottom:80}}
    >
    <OrangeText >Login to account</OrangeText>
    </OrangeTextButton>
    </CenterView>
    
    </BaseLayout>
  )
}

export default OnboardingScreen;