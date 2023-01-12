import React, {useState, type PropsWithChildren} from 'react';
import {
    Alert,
  Dimensions,
  FlatList,
  Image,
  Modal,
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
import styles from '../includes/styles';
import {DescriptionText,OrangeText,OrangeButton,BaseInput,BaseLayout,InnerContainer,HeaderText,CreditCard,Avatar, TextWrapper, WhiteText, BlackText, ModalLayout} from './../components';
import {Reducers,NavigationProps,JsonDataSets, items} from './../includes/types';
import CONSTANTS from './../includes/constants';
import * as y from 'yup';
import { Formik } from 'formik';
import Icons from '../includes/icons';
import SearchBar from './SearchBar';

interface BottomComponentType  {
    type:'contact'|'country';
    title?:string;
    label?:string;
    error?:string;
    navigation?:NavigationProps;
    Reducer?:Reducers;
    route?:any;
    children?:React.ReactNode;
    backgroundColor?:string;
    returnValue:(value: BottomSheetItemProps) => void;
  }
export interface BottomSheetItemProps {
    name?:string; 
    code?:string;
    id?:string;
    bank?:string;
    number?:string;
}


const BottomSheetComponent = ({navigation,type,title,Reducer,route,children,label,returnValue}:BottomComponentType) => {
 
  const [showModal,setShowModal] = useState(false);
 const savelistOfbanks:BottomSheetItemProps[] = [
    { id: "1", bank: "Access Bank" ,code:"044" },
    { id: "2", bank: "Citibank",code:"023" },
    { id: "3", bank: "Diamond Bank",code:"063" },
    { id: "4", bank: "Dynamic Standard Bank",code:"" },
    { id: "5", bank: "Ecobank Nigeria",code:"050" },
    { id: "6", bank: "Fidelity Bank Nigeria",code:"070" },
    { id: "7", bank: "First Bank of Nigeria",code:"011" },
    { id: "8", bank: "First City Monument Bank",code:"214" },
    { id: "9", bank: "Guaranty Trust Bank",code:"058" },
    { id: "10", bank: "Heritage Bank Plc",code:"030" },
    { id: "11", bank: "Jaiz Bank",code:"301" },
    { id: "12", bank: "Keystone Bank Limited",code:"082" },
    { id: "13", bank: "Providus Bank Plc",code:"101" },
    { id: "14", bank: "Polaris Bank",code:"076" },
    { id: "15", bank: "Stanbic IBTC Bank Nigeria Limited",code:"221" },
    { id: "16", bank: "Standard Chartered Bank",code:"068" },
    { id: "17", bank: "Sterling Bank",code:"232" },
    { id: "18", bank: "Suntrust Bank Nigeria Limited",code:"100" },
    { id: "19", bank: "Union Bank of Nigeria",code:"032" },
    { id: "20", bank: "United Bank for Africa",code:"033" },
    { id: "21", bank: "Unity Bank Plc",code:"215" },
    { id: "22", bank: "Wema Bank",code:"035" },
    { id: "23", bank: "Zenith Bank",code:"057" }
]
const shuffleBankName = ()=>{
  let rand = Math.floor(Math.random() * savelistOfbanks.length);
  return savelistOfbanks[rand].bank;
 }
const savecontactlist:BottomSheetItemProps[] = Array.from({length:50}).map((a,i)=>{
return { name: `Contact ${i+1}`,bank:shuffleBankName() ,number:"220312345"+i}
})
const [contactlist,setcontactlist] = useState<BottomSheetItemProps[]>(savecontactlist)
const [listOfbanks,setlistOfbanks] = useState<BottomSheetItemProps[]>(savelistOfbanks)
 const ModalSection = ()=>{
    return  <Modal 
    visible={showModal}
    transparent={true}
    onRequestClose={()=>setShowModal(false)}
    animationType="slide"
    onShow={()=>{
      if(type == "contact")
      {
        setcontactlist(savecontactlist)
      }else{
        setlistOfbanks(savelistOfbanks)
      }
    }}
    >
    <ModalLayout >
    <TouchableOpacity 
    onPress={()=>setShowModal(false)}
    style={{width:"100%",height:"100%",position:"absolute",top:0,left:0}}
    ></TouchableOpacity>
    <View 
    style={{flex:1,flexDirection:"column",justifyContent:"flex-end"}}
    >
    <View 
    style={{flex:1}}></View>
    <InnerContainer 
    style={{padding:20,height:null,flex:2}}
    >
<View style={{flexDirection:"row"}}>
<TouchableOpacity 
 onPress={()=>setShowModal(false)}
>
<Icons.AntDesign name="close" color={CONSTANTS.COLORS.dark}  size={20} />
</TouchableOpacity>
<View style={{flex:1,justifyContent:"center",alignItems:"center",paddingRight:40}}>
<BlackText style={{fontSize:16,fontWeight:"bold"}}>{title}</BlackText>
</View>
</View>
<View style={{flexDirection:"column",flex:1,minHeight:120}}>
<SearchBar 
placeholder='Search'
onChangeText={(d)=>{
  if(type == "contact")
  {
    const search:BottomSheetItemProps[] = savecontactlist.filter((a,i)=>String(a.bank).toLowerCase().includes(String(d).toLowerCase()) || String(a.number).toLowerCase().includes(String(d).toLowerCase())  || String(a.name).toLowerCase().includes(String(d).toLowerCase()))
    setcontactlist(d == ""?savecontactlist:search)
  }else{
const search:BottomSheetItemProps[] = savelistOfbanks.filter((a,i)=>String(a.name).toLowerCase().includes(String(d).toLowerCase()))
setlistOfbanks(d == ""?savelistOfbanks:search)
  }
}}
/>
{type == "contact"?<FlatList
        keyboardShouldPersistTaps="always"
       scrollEnabled={true}
       keyExtractor={(item,index)=>`${index}`}
       showsVerticalScrollIndicator={false}
       data={contactlist}
       initialNumToRender={15}
       maxToRenderPerBatch={15}
       updateCellsBatchingPeriod={15}
       removeClippedSubviews={true}
       contentContainerStyle={{width:"100%",}}
       ItemSeparatorComponent={()=><View style={{height:0.5,backgroundColor:"rgba(0,0,0,0.2)",width:"100%"}}></View>}
       renderItem={({item,index})=>{
        let shortName = String(item.bank).split(" ").filter((a,i)=>a != "of").map((a,i)=>a[0]).join("")
       
        return <TouchableOpacity 
        onPress={()=>{
            returnValue(item);
            setShowModal(false);
        }}
        style={{flexDirection:"row",width:"100%",paddingVertical:10}}>
                 <View style={{flex:1,flexDirection:"column",paddingHorizontal:10,justifyContent:"center"}}>
                 <Text style={{color:"black",fontSize:12,fontWeight:"700",marginTop:5}}>{item?.name}</Text>
                 <View style={{flexDirection:"row",marginTop:5}}>
                 <Text style={{color:"black",fontSize:12,fontWeight:"400"}}>{item?.number}</Text>
                 <Text style={{color:"black",fontSize:12,fontWeight:"400",position:"absolute",right:0}}>{item.bank}</Text>
                 </View>
                 </View>
        </TouchableOpacity>}}
       />:<FlatList
       keyboardShouldPersistTaps="always"
      scrollEnabled={true}
      keyExtractor={(item,index)=>`${index}`}
      showsVerticalScrollIndicator={false}
      data={listOfbanks}
      initialNumToRender={15}
      maxToRenderPerBatch={15}
      updateCellsBatchingPeriod={15}
      removeClippedSubviews={true}
      contentContainerStyle={{width:"100%",}}
      ItemSeparatorComponent={()=><View style={{height:0.5,backgroundColor:"rgba(0,0,0,0.2)",width:"100%"}}></View>}
      renderItem={({item,index})=>{
       let shortName = String(item.bank).split(" ").filter((a,i)=>a != "of").map((a,i)=>a[0]).join("")
       return <TouchableOpacity 
       onPress={()=>{
           returnValue(item);
           setShowModal(false);
       }}
       style={{flexDirection:"row",width:"100%",paddingVertical:10}}>
                <View style={{flex:1,flexDirection:"column",paddingHorizontal:10,justifyContent:"center"}}>
                <Text style={{color:"black",fontSize:12,fontWeight:"700",marginTop:5}}>{item?.bank}</Text>
                <Text style={{color:"black",fontSize:12,fontWeight:"400",marginTop:5}}>{shortName}</Text>
                </View>
       </TouchableOpacity>}}
      />}
</View>
    </InnerContainer>
    </View>
    </ModalLayout>    
    </Modal>
}
  return (<View style={{flexDirection:"column",marginTop:20}}>
    <View style={{flexDirection:"row"}}>
    {label && <Text style={styles.labelStyle}>{label}</Text>}
    {type == "contact" && <TouchableOpacity 
     onPress={()=>setShowModal(true)}
     style={{position:'absolute',right:0}}
    >
     <OrangeText style={{fontSize:14}}>Find beneficiary</OrangeText>
    </TouchableOpacity>}
    </View>
    {type == "contact" && ModalSection()}
    {type == "country" && <View style={[styles.input,{minHeight:50,borderRadius:10,elevation:3,overflow:"hidden",justifyContent:"center",alignItems:"center",flexDirection:"row"}]}>
    <TouchableOpacity 
  onPress={()=>setShowModal(true)}
  style={{minHeight:50,width:"100%",justifyContent:"center",alignItems:"center"}}
  >
    {children}
  </TouchableOpacity>
   {ModalSection()}
  </View>}
  </View>)
}
export default BottomSheetComponent;