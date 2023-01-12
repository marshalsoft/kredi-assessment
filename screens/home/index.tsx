import React, {type PropsWithChildren} from 'react';
import {
  Alert,
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
import { getJsonData } from '../../includes/myfunctions';
import styles from '../../includes/styles';
import CardSection from './components/CardSection';
import {BaseLayout,InnerContainer,CreditCard,Avatar, TextWrapper, WhiteText, BlackText} from '../../components';
import {ScreenComponentType,JsonDataSets, items} from '../../includes/types';
import CONSTANTS from '../../includes/constants';
import LoanSection from './components/loanSection';
import QuickActionSection from './components/QuickActionSection';
import TransactionHistorySection from './components/TransactionHistorySection';
import { connect } from 'react-redux';

const DashboardScreen = ({navigation,Reducer,route}:ScreenComponentType) => {
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
          <Image 
            source={CONSTANTS.IMAGES.LOGO}
            style={{width:90,height:60}}
            resizeMode="contain"
          />
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
  <WhiteText >Welcome, </WhiteText>
  <WhiteText style={{fontWeight:"bold"}}>{Reducer?.firstname}</WhiteText>
 </TextWrapper>
 <CardSection />
 <View style={{flexDirection:"column",minHeight:600,width}} >
 <View style={{flexDirection:"column",width}} >
 <LoanSection />
 </View>
 <View style={{flexDirection:"column",width}} >
 <QuickActionSection
 navigation={navigation}
 />
 </View>
 <View style={{flexDirection:"column",width}} >
<TransactionHistorySection 
navigation={navigation}
/>
</View>
</View>
 </View>
</ScrollView>
    </BaseLayout>
  );
};
const mapStateToProps = (state:any) => {
  return state;
}

export default connect(mapStateToProps)(DashboardScreen);

