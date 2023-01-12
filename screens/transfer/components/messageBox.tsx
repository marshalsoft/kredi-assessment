import React, {useState, type PropsWithChildren} from 'react';
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
} from 'react-native';
const {width} = Dimensions.get("screen")
import styles from '../../../includes/styles';
import {DescriptionText,OrangeText,OrangeButton,BaseInput,BaseLayout,InnerContainer,HeaderText,CreditCard,Avatar, TextWrapper, WhiteText, BlackText} from '../../../components';
import {ScreenComponentType,JsonDataSets, items} from '../../../includes/types';
import CONSTANTS from '../../../includes/constants';
import Icons from '../../../includes/icons';
interface MessagelistProps {
    title:string;
    description:string;
    route:string;
}

const MessageBoxComponent = ({navigation,Reducer,route}:ScreenComponentType) => {
  const [messagelist,setMessagelist] = useState<MessagelistProps[]>([
{
    title:"Want to get a credit card?",
    description:"REQUEST A CREDIT CARD",
    route:"credit_card_request"
},
{
    title:"Want to get a doller card?",
    description:"REQUEST A DOLLAR CARD",
    route:"credit_card_request"
}
  ])
  return (<View 
  >
  {messagelist.filter((a,i)=>i == 0).map((a,o,self)=><View 
  style={{paddingHorizontal:10,backgroundColor:"#EBEBF5",borderRadius:5,flexDirection:"row",height:90}}
  >
<Image 
source={CONSTANTS.IMAGES.MessageBox}
style={{width:50}}
resizeMode="contain"
/>
<View style={{flexDirection:"column",paddingHorizontal:10,justifyContent:"center"}}>
<BlackText >{a.title}</BlackText>
<TouchableOpacity >
    <OrangeText style={{fontSize:14,textDecorationLine:"underline",textDecorationColor:CONSTANTS.COLORS.Orange}}>{a.description}</OrangeText>
</TouchableOpacity>
</View>
<TouchableOpacity 
onPress={()=>{
setMessagelist(self.filter((a,i)=>i != o))
}}
style={{position:"absolute",top:0,right:0,padding:5}}
>
  <Icons.AntDesign name="close" color={CONSTANTS.COLORS.Orange} size={20} />
</TouchableOpacity>
  </View>)}
  </View>)
}
export default MessageBoxComponent;