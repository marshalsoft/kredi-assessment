import {ButtonProps,Dimensions,Image,View} from 'react-native'
import BaseHeader from './Header';
import BaseLayout from './app_container';
import BaseInput from './BaseInput';
import styled from 'styled-components';
import Icons from '../includes/icons';
import CONSTANTS from '../includes/constants';
const {width,height} = Dimensions.get("screen")
const HeaderText = styled.Text`color:#FEC640;font-size:26px;font-weight:bold;`;
const OrangeText = styled.Text`color:#F25C44;font-size:16px;font-weight:bold;`;
const DescriptionText = styled.Text`color:#F25C44;font-size:12px;`;
const CenterView = styled.View`justify-content:center;align-items:center;width:100%;height:100%;`;
const OrangeTextButton = styled.TouchableOpacity`justify-content:center;align-items:center;padding:10px;`;
const OrangeButton = styled.TouchableOpacity`justify-content:center;align-items:center;padding:15px;background-color:#F25C44;margin:10px;border-radius:10px;width:80%;`;
const WhiteText = styled.Text`color:white;font-size:14px;`;
const Button = styled.TouchableOpacity`justify-content:center;align-items:center;`;
const BackButton = ({onPress = ()=>{},color = "white",style={}})=>{
return <Button 
style={{...style}}
onPress={onPress}
>
<Icons.Ionicons name="chevron-back" size={30} color={color} />
</Button>
}
const InnerContainer = styled.View`flex-direction:column;background-color:#FAF9FF;border-top-left-radius:30px;border-top-right-radius:30px;height:100%;`;
const TextWrapper = styled.View`flex-direction:row;flex-wrap:wrap;`;
const BlackText = styled.Text`color:#000000;font-size:14px;`;
const ModalLayout = styled.View`background-color:rgba(0,0,0,0.6);width:100%;height:100%;`;
const AvatarWrapper = styled.View`background-color:black;width:60px;height:60px;border-radius:60px;overflow:hidden;`;
const Avatar = ({source = {uri:CONSTANTS.IMAGES.Avatar}})=>{
   return <AvatarWrapper >
      <Image
         style={{width:60,height:60}}
         source={source}

      />
   </AvatarWrapper>
}
const CreditCard = styled.View`width:${width-60}px;height:200px;background-color:rgba(255,255,2255,0.2);border-radius:15px;border-color:white;border-width:0.5px;flex-direction:column;padding:15px;`;
const PlaceHolderView =({style = {}})=>{
   return (<View style={{width:"100%",height:20,backgroundColor:"rgba(0,0,0,0.05)",borderRadius:10,height:10,marginVertical:5,...style}}></View>)
 }
export {
   BaseHeader,
   BaseLayout,
   BaseInput,
   HeaderText,
   DescriptionText,
   OrangeText,
   CenterView,
   OrangeTextButton,
   WhiteText,
   OrangeButton,
   BackButton,
   InnerContainer,
   TextWrapper,
   BlackText,
   ModalLayout,
   Avatar,
   CreditCard,
   PlaceHolderView
}