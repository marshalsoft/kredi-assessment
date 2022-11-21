import { StyleSheet,TouchableOpacity, Text, View,Image,Animated,FlatList, ScrollView, Alert } from 'react-native'
import React from 'react'
import {connect} from 'react-redux';
import styles from '../../../includes/styles';
import {ComponentType,JsonDataSets, items} from '../../../includes/types';
import LoaderView from '../../../components/loader';
import SearchBar from '../../../components/SearchBar';

const MovieContent = ({Reducer,navigation,route}:ComponentType) => {
    const [movies,Setmovies] = React.useState([]);
    const [allmovies,Setallmovies] = React.useState([]);
    const [loading,Setloading] = React.useState(true);
    const SearchSeries = (searchText:string)=>{
      Setloading(true);
      setTimeout(()=>{
        const list = route.params.movielist.filter((a:any,i:number)=>String(a.title).toLowerCase().includes(String(searchText).toLowerCase()) || String(a.releaseYear).toLowerCase().includes(String(searchText).toLowerCase()))
        Setmovies(list);
        Setloading(false);
      },500)
     }
     const getMovies = ()=>{
      setTimeout(()=>{
        Setallmovies(route.params.movielist)
        Setmovies(route.params.movielist.filter((a:any,i:number)=>parseInt(a.releaseYear) >= 2010));
        Setloading(false);
      },500)
     }
    React.useEffect(()=>{
      getMovies();
  },[])
    return (<ScrollView 
    style={{width:"100%"}}
    >
<View style={{flexDirection:"column",width:"100%"}}>
<View style={[styles.headerDarkBck,{paddingHorizontal:16,paddingVertical:10,flexDirection:"row"}]}>
<View style={{flex:1}}>
<Text style={[styles.whiteText,{fontWeight:"bold",fontSize:12}]}>Popular Movies</Text>
</View>
</View>
<SearchBar 
placeholder='Search title, year of release ...'
onChangeText={(d)=>{
  SearchSeries(d);
}}
list={allmovies}
/>
<LoaderView
loading={loading}
message="fetching movies..."
list={movies}
/>
    <FlatList 
    maxToRenderPerBatch={11}
    keyboardShouldPersistTaps="always"
     data={movies}
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
        <Text style={[styles.movieTitle,{marginBottom:0}]}>{item.title}</Text>
        <Text style={[styles.movieTitle,{fontWeight:"800"}]}>{item.releaseYear}</Text>
      </TouchableOpacity>
     }}
     />
     </View>
     </ScrollView>)
}
     const mapDispatchToProps = (state:any)=>{
        return state;
      }
    export default connect(mapDispatchToProps)(MovieContent);
      