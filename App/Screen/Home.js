import { View, Text, StyleSheet, ScrollView, ActivityIndicator, Dimensions } from 'react-native'
import React, { useState,useEffect, } from 'react';
import { Ionicons } from '@expo/vector-icons';
import GlobalApi from '../Services/GlobalApi'
import CategoryTextSlider from '../Components/HomeComponents/CategoryTextSlider';
import TopHeadlineSlider from '../Components/HomeComponents/TopHeadlineSlider';
import HeadlineList from '../Components/HomeComponents/HeadlineList';
import Color from '../Shared/Color';

const Home = () => {

    const[newsList,setNewsList]=useState([]);
    const[loading,setLoading]=useState(true);
    useEffect(()=>{
        // getTopHeadline();
        getNewsByCategory('latest');
    },[])

    const getNewsByCategory=async(category)=>{
        setLoading(true);
        const result=(await GlobalApi.getByCategory(category)).data;
        setNewsList(result.articles);
        setLoading(false);
    }

  return (
    <ScrollView style={{backgroundColor:Color.white}}>
     
          <View style={{display:'flex',flexDirection:"row",justifyContent:'space-between',alignItems:'center'}}>
          <Text style={styles.appName}>Todays NEWS</Text>
          <Ionicons name="notifications-outline" size={28} color="black" />
        </View>
        <CategoryTextSlider selectCategory={(category)=>getNewsByCategory(category)}/>
        {loading?<ActivityIndicator size={'large'} color={Color.primary} style={{marginTop:Dimensions.get('screen').height*0.40}}/>: 
        <View>
        <TopHeadlineSlider newsList={newsList}/>
        <HeadlineList newsList={newsList}/>
        </View>
      }
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    appName:{
        fontSize:24,
        fontWeight:'bold',
        color:"red"
    }
})

export default Home