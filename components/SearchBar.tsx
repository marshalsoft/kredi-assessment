import { Alert, StyleSheet,TouchableWithoutFeedback,Modal,Image, Text, TextInput, View, TouchableOpacity, FlatList, ScrollView } from 'react-native'
import React from 'react'
import styles from '../includes/styles';

const SearchBar = ({onChangeText =(d:string)=>{},placeholder = "Search here...",list = []})=>{
    const [searchText,setsearchText] = React.useState("");
    const [showModal,setshowModal] = React.useState(false);
  return (
    <View style={styles.searchbarwrapper}>
      <TextInput 
      style={{flex:1,color:"black",paddingHorizontal:15}}
      placeholder={placeholder}
      placeholderTextColor={"#555"}
      value={searchText}
      onChangeText={(d:string)=>{
        setsearchText(d);
        onChangeText(d);
      }}
      />
      {searchText == ""?<Image 
        style={{width:30,height:30,marginRight:10}}
        source={require("../assets/images/search.png")}
        resizeMode="cover"
        />:<TouchableOpacity 
        onPress={()=>{
            setsearchText("");
        }}
        ><Image 
        style={{width:20,height:20,marginRight:10}}
        source={require("../assets/images/close.png")}
        resizeMode="cover"
        /></TouchableOpacity>}
        <TouchableOpacity 
        onPress={()=>{
            setshowModal(true);
        }}
        ><Image 
        style={{width:25,height:25,marginRight:10}}
        source={require("../assets/images/filter.png")}
        resizeMode="cover"
        /></TouchableOpacity>
        <Modal 
        visible={showModal}
        transparent={true}
        animationType="slide"
        >
          <TouchableWithoutFeedback 
          onPress={()=>{
            setshowModal(false);
          }}
          >
            <View style={styles.inner}></View>
          </TouchableWithoutFeedback>
          <View style={[styles.card,{position:"absolute",bottom:0,borderBottomLeftRadius:0,borderBottomRightRadius:0,maxHeight:300}]}>
            <Text style={[styles.heading1,{color:"#555",fontSize:14}]}>Filter by:</Text>
            <View style={styles.hline}></View>
            <Text style={{fontSize:14,color:"#444"}}>Year of release</Text>
            <ScrollView
            style={{width:"100%"}}
            >
            {list.map((a:any,i:number)=>a.releaseYear).map((a:any,i:number)=><View style={{width:"100%",flexDirection:'column'}}>
              <TouchableOpacity 
              onPress={()=>{
                onChangeText(a);
                setshowModal(false);
              }}
              key={i} style={{padding:10}}>
              <Text style={{fontSize:14,color:"#444"}}>{a}</Text>
            </TouchableOpacity>
            <View style={[styles.hline,{opacity:0.3}]}></View>
            </View>)}
            </ScrollView>
           <TouchableOpacity 
        onPress={()=>{
          setshowModal(false);
        }}
        style={{right:10,position:"absolute",top:10}}
        ><Image 
        style={{width:20,height:20}}
        source={require("../assets/images/close.png")}
        resizeMode="cover"
        /></TouchableOpacity>
          </View>
        </Modal>
    </View>
  )
}
export default SearchBar;

