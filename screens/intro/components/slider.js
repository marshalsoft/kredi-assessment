import { StyleSheet,TouchableOpacity, Text, View,Image,Animated,FlatList, ScrollView, Alert, Dimensions } from 'react-native'
import React,{useRef, useState} from 'react'
import {connect} from 'react-redux';
import styles from '../../../includes/styles';
import {ComponentType,JsonDataSets, items, ScreenComponentType} from '../../../includes/types';
import {BaseLayout,OrangeText,BaseInput,DescriptionText,HeaderText,WhiteText, OrangeButton} from '../../../components';
import CONSTANTS from '../../../includes/constants';
const {width,height} = Dimensions.get("screen")
import NavButton from './NavButton';

import { Carousel,Pagination } from 'react-native-snap-carousel-v4';
import Icons from '../../../includes/icons';
const SliderComponent = ({Reducer,gotologin=()=>{},route}) => {
const SliderItems = [
    {
     image:CONSTANTS.IMAGES.SlideOne,
     title:"Kredi Savings",
     description:"Save however much you want for however long you want and earn daily interest on your deposit.",
     leftButtonText:"Skip",
     rightButtonText:"Next"
    },
    {
      image:CONSTANTS.IMAGES.SlideTwo,
      title:"Kredi Loans" ,
      description:"No collateral needed. Apply for and get the funding you need in no time at low interest rates.",
      leftButtonText:"Skip",
     rightButtonText:"Next"
    }
    ,
    {
      image:CONSTANTS.IMAGES.SlideThree,
      title:"Kredi Loans" ,
      description:"You will never be changed a kobo over what is stipulated in the contract you sign with us." ,
      leftButtonText:"",
      rightButtonText:"" 
    }
]
const [activeSlide,SetActiveSlide] = useState(0)
 const Parentslide = useRef(null); 
const pagination = ()=>{
  return (<View style={{position:"absolute",bottom:146,width:"100%"}}>
    <Pagination
        dotsLength={SliderItems.length}
        activeDotIndex={activeSlide}
        containerStyle={{ backgroundColor: 'transparent',marginTop:-20 }}
        dotStyle={{
            width: 18,
            height: 8,
            borderRadius: 5,
            marginHorizontal: 0,
            backgroundColor: 'rgba(255, 255, 255, 0.92)'
        }}
        inactiveDotStyle={{
            // Define styles for inactive dots here
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
      </View>
  );
}
const renderItem = ({item, index})=>{
return (<View style={{flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
  <Image 
style={{width,height}}
source={item?.image}
resizeMethod="scale"
resizeMode='cover'
  />
  <View style={{position:"absolute",top:0,width:"100%",height:"100%",justifyContent:"center",alignItems:"center"}}>
 <Image 
 style={{width:120,height:50}}
 source={CONSTANTS.IMAGES.LOGO}
 resizeMethod="scale"
 resizeMode='contain'
/>
<OrangeText style={{color:"#rgb(254,198,64)",fontSize:30,fontWeight:"bold"}}>{item.title}</OrangeText>
<DescriptionText style={{color:"#D1D2DB",width:"70%",textAlign:"center"}}>{item.description}</DescriptionText>
  </View>
  {item.leftButtonText != ""?<View style={{position:"absolute",bottom:0,width:"100%"}}>
    <NavButton
      position='left'
      onPress={()=>{
        if(item?.leftButtonText === "Skip")
        {
         gotologin()
        }else{
          Parentslide.current.snapToItem(index - 1)
        }
      }}
     >
      <OrangeText>{item?.leftButtonText}</OrangeText>
     </NavButton>
     <NavButton
position='right'
onPress={()=>{
  Parentslide.current.snapToItem(index + 1)
}}
     >
      <OrangeText>{item?.rightButtonText}</OrangeText>
      <Icons.AntDesign name="arrowright" color={CONSTANTS.COLORS.Orange} size={20}  style={{marginLeft:5}}/>
     </NavButton>
  </View>:<OrangeButton 
  onPress={()=>{
    gotologin();
  }}
  style={{position:"absolute",bottom:30,width:"100%",backgroundColor:CONSTANTS.COLORS.Orange,height:100,borderRadius:0,justifyContent:"center",alignItems:"center",flexDirection:"row"}}>
  <WhiteText>Get started</WhiteText>
  <Icons.AntDesign name="arrowright" color={"white"} size={20}  style={{marginLeft:5}}/>
  </OrangeButton>}
</View>)
}
return <View
style={{width,height,backgroundColor:CONSTANTS.COLORS.dark}}
>
  <Carousel
  ref={Parentslide}
  data={SliderItems}
  renderItem={renderItem}
  sliderWidth={width}
  itemWidth={width}
  layout={'default'}
  enableSnap={true}
  layoutCardOffset={0}
//   autoplay={true}
// loop={true}
activeSlideAlignment='center'
  onSnapToItem={(index) => SetActiveSlide(index) }
/>
{pagination()}
</View>
}
export default SliderComponent;
  