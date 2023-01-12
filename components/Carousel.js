import { View, Text,Dimensions, Alert} from 'react-native'
import React,{useRef, useState} from 'react';
import {Carousel,Pagination} from 'react-native-snap-carousel-v4';
const {width} = Dimensions.get("screen");
import {CreditCard, WhiteText} from '../components/index'
import Icons from '../includes/icons';
import { AddComma } from '../includes/myfunctions';
const CarouselView = ({list=[]}) => {
    const c = useRef(null);
    const [activeSlide,SetActiveSlide] = useState(0)
    
    const pagination = ()=>{
      return (
          <Pagination
            dotsLength={list.length}
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
      );
  }
    const renderItem = ({item, index})=>{
    const formatedAmount = AddComma(item?.amount);
    let lastPart = formatedAmount.split(".");
    
return (<CreditCard 

>
  <View style={{flexDirection:"row"}}>
    <WhiteText style={{fontSize:10}} >KrediBank balance</WhiteText>
<Icons.MaterialCommunityIcons name="signal-variant" size={30} color="white"  style={{position:"absolute",right:0,top:0}} />
  </View>
  <View style={{flexDirection:"row"}}>
    <WhiteText style={{fontSize:14}} >{item?.currency}</WhiteText>
    <WhiteText style={{fontSize:25,fontWeight:"bold"}} >{lastPart[0]}</WhiteText>
    <WhiteText style={{fontSize:14}} >.{lastPart[1]?lastPart[1]:"00"}</WhiteText>
  </View>
  <View style={{flexDirection:"row",flex:1,justifyContent:"flex-start",alignItems:"center"}}>
  <WhiteText style={{fontSize:20}} >{item?.number}</WhiteText>
  </View>
  <View style={{flexDirection:"row",flex:1,justifyContent:"center",alignItems:"center"}}>
  <View style={{flexDirection:"column",flex:1,justifyContent:"flex-start",alignItems:"flex-start"}}>
  <WhiteText style={{fontSize:10}} >Expiry Date</WhiteText>
  <WhiteText style={{fontSize:10}} >{item?.expiry}</WhiteText>
  </View>
  <WhiteText style={{fontSize:13,fontStyle:"italic",fontWeight:"bold",position:"absolute",bottom:0,right:0}} >{item?.brand}</WhiteText>
  </View>
</CreditCard>)
    }
  return (<View
  style={width}
  >
    <Carousel
    ref={c}
    data={list}
    renderItem={renderItem}
    sliderWidth={width}
    itemWidth={width-60}
    layout={'default'}
    enableSnap={true}
    layoutCardOffset={18}
    onSnapToItem={(index) => SetActiveSlide(index) }
  />
  {pagination()}
  </View>
  )
}

export default CarouselView;