import { Dimensions, StyleSheet,TouchableWithoutFeedback,Modal,Image, Text, TextInput, View, TouchableOpacity, FlatList, ScrollView } from 'react-native'
import React from 'react'
import styles from '../includes/styles';
import CONSTANTS from '../includes/constants';
const {width} = Dimensions.get("screen");
const SearchBar = ({onChangeText =(d:string)=>{},placeholder = "Search here...",list = []})=>{
    const [searchText,setsearchText] = React.useState("");
    const [showModal,setshowModal] = React.useState(false);
  return (
    <View style={{width:width-40,backgroundColor:"#EDEEEE",flexDirection:"row",height:50,alignItems:"center",borderRadius:10,paddingHorizontal:10,marginVertical:10}}>
      {searchText == "" && <Image 
        style={{width:25,height:30,marginRight:5}}
        source={require("../assets/images/search.png")}
        resizeMode="cover"
        />}
      <TextInput 
      style={[{width:"95%",color:CONSTANTS.COLORS.dark}]}
      placeholder={placeholder}
      placeholderTextColor={"#555"}
      value={searchText}
      onChangeText={(d:string)=>{
        setsearchText(d);
        onChangeText(d);
      }}
      />
      {searchText !== "" && <TouchableOpacity 
        onPress={()=>{
            setsearchText("");
        }}
        ><Image 
        style={{width:20,height:20,marginRight:10}}
        source={require("../assets/images/close.png")}
        resizeMode="cover"
        /></TouchableOpacity>}
    </View>
  )
}
export default SearchBar;

