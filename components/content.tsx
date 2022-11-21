import { StyleSheet,TouchableOpacity, Text, View,Image,Animated,FlatList, ScrollView } from 'react-native'
import React from 'react'
import {connect} from 'react-redux';
import styles from '../includes/styles';
import FadeIn from './fadeIn';
import {ComponentType,JsonDataSets, items} from '../includes/types';
import { getJsonData } from '../includes/myfunctions';
const HomeContent = ({Reducer,navigation}:ComponentType) => {
    const [movies,Setmovies] = React.useState([]);
    const [series,Setseries] = React.useState([]);
    React.useEffect(()=>{
    getJsonData().then(({entries,total}:JsonDataSets)=>{
      // filtering movies from the json file
        Setmovies(entries.filter((a,i,self)=>a.programType  == "movie"));
      // filtering series from the json file
        Setseries(entries.filter((a,i,self)=>a.programType  == "series"));
      })
  },[])
    return (<ScrollView 
    style={{width:"100%"}}
    >
    <View style={{flexDirection:"column",width:"100%"}}>
    <View style={[styles.headerDarkBck,{paddingHorizontal:16,paddingVertical:10,flexDirection:"row"}]}>
<View style={{flex:1}}>
<Text style={[styles.whiteText,{fontWeight:"bold",fontSize:12}]}>Movies</Text>
</View>
<TouchableOpacity 
onPress={()=>{
    navigation.navigate("Movies",{movielist:movies})
}}
>
<Text style={[styles.whiteText,{fontSize:12}]}>More...</Text>
</TouchableOpacity>
</View>
    <FlatList 
     keyboardShouldPersistTaps="always"
     data={movies.filter((a,i)=>i < 12)}
     contentContainerStyle={{flexDirection:"row",flexWrap:"wrap",marginVertical:10,justifyContent:movies.length >= 4?"center":"flex-start",width:"100%"}}
     renderItem={({item,index}:any)=>{
      return <TouchableOpacity 
      onPress={()=>{
        // alert(JSON.stringify(item));
      }}
      style={[styles.thumbnail]}>
       <Image 
        style={styles.thumbnail_imge}
        source={{uri:item.images.PosterArt.url}}
        resizeMode="contain"
        /> 
        <Text style={styles.movieTitle}>{item.title}</Text>
      </TouchableOpacity>
     }}
     />
<View style={[styles.headerDarkBck,{paddingHorizontal:16,paddingVertical:10,marginTop:10,flexDirection:"row"}]}>
<View style={{flex:1}}>
<Text style={[styles.whiteText,{fontWeight:"bold",fontSize:12}]}>Series</Text>
</View>
<TouchableOpacity
onPress={()=>{
    navigation.navigate("Series",{serieslist:series})
}}
>
<Text style={[styles.whiteText,{fontSize:12}]}>More...</Text>
</TouchableOpacity>
</View>
     <FlatList 
     keyboardShouldPersistTaps="always"
     data={series.filter((a,i)=>i < 12)}
     contentContainerStyle={{flexDirection:"row",flexWrap:"wrap",marginVertical:10,justifyContent:series.length >= 4?"center":"flex-start",width:"100%"}}
     renderItem={({item,index}:any)=>{
      return <TouchableOpacity style={[styles.thumbnail]}>
       <Image 
        style={styles.thumbnail_imge}
        source={{uri:item.images.PosterArt.url}}
        resizeMode="contain"
        /> 
        <Text style={styles.movieTitle}>{item.title}</Text>
      </TouchableOpacity>
     }}
     />
     </View>
     </ScrollView>)
}
     const mapDispatchToProps = (state:any)=>{
        return state;
      }
    export default connect(mapDispatchToProps)(HomeContent);
      