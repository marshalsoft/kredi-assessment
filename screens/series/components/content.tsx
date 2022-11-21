import { StyleSheet,TouchableOpacity, Text, View,Image,Animated,FlatList, ScrollView, Alert, ActivityIndicator } from 'react-native'
import React from 'react'
import {connect} from 'react-redux';
import styles from '../../../includes/styles';
import {ComponentType,JsonDataSets, items} from '../../../includes/types';
import LoaderView from '../../../components/loader';
import SearchBar from '../../../components/SearchBar';

const SeriesContent = ({Reducer,navigation,route}:ComponentType) => {
    const [series,Setseries] = React.useState([]);
    const [allseries,Setallseries] = React.useState([]);
    const [loading,Setloading] = React.useState(true);
   const getSeries = ()=>{
    Setloading(true);
    setTimeout(()=>{
      Setallseries(route.params.serieslist);
      Setseries(route.params.serieslist);
      Setloading(false);
    },500)
   }
   const SearchSeries = (searchText:string)=>{
    Setloading(true);
    setTimeout(()=>{
      const list = route.params.serieslist.filter((a:any,i:number)=>String(a.title).toLowerCase().includes(String(searchText).toLowerCase()) || String(a.releaseYear).toLowerCase().includes(String(searchText).toLowerCase()))
      Setseries(list);
      Setloading(false);
    },500)
   }
    React.useEffect(()=>{
      getSeries();
  },[])
    return (<ScrollView 
    style={{width:"100%"}}
    >
<View style={{flexDirection:"column",width:"100%"}}>
<View style={[styles.headerDarkBck,{paddingHorizontal:16,paddingVertical:10,flexDirection:"row"}]}>
<View style={{flex:1}}>
<Text style={[styles.whiteText,{fontWeight:"bold",fontSize:12}]}>Popular Series</Text>
</View>
</View>
<SearchBar 
placeholder='Search title, year of release...'
onChangeText={(d)=>{
  SearchSeries(d);
}}
list={allseries}
/>
<LoaderView
loading={loading}
message="fetching series..."
list={series}
/>
    <FlatList 
    keyboardShouldPersistTaps="always"
     data={series}
     maxToRenderPerBatch={11}
     contentContainerStyle={{flexDirection:"row",flexWrap:"wrap",marginVertical:10,justifyContent:series.length >= 4?"center":"flex-start",width:"100%"}}
     renderItem={({item}:any)=>{
      return <TouchableOpacity 
      onPress={()=>{
        // alert(JSON.stringify(item));
      }}
      style={[styles.thumbnail]}>
       <Image 
        style={styles.thumbnail_imge}
        source={{uri:item.images.PosterArt.url}}
        resizeMode="stretch"
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
    export default connect(mapDispatchToProps)(SeriesContent);
      