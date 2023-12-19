import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, { useState,useEffect, } from 'react';
import { Ionicons } from '@expo/vector-icons';
import GlobalApi from '../Services/GlobalApi'
import CategoryTextSlider from '../Components/HomeComponents/CategoryTextSlider';
import TopHeadlineSlider from '../Components/HomeComponents/TopHeadlineSlider';
import HeadlineList from '../Components/HomeComponents/HeadlineList';
import Color from '../Shared/Color';

const Home = () => {

    const[newsList,setNewsList]=useState([]);
    useEffect(()=>{
        getTopHeadline();
    },[])

    const getTopHeadline=async()=>{
        const result=(await GlobalApi.getTopHeadline).data;
        setNewsList(result.articles);
    }

  return (
    <ScrollView style={{backgroundColor:Color.white}}>
        <View style={{display:'flex',flexDirection:"row",justifyContent:'space-between',alignItems:'center'}}>
          <Text style={styles.appName}>Todays NEWS</Text>
          <Ionicons name="notifications-outline" size={28} color="black" />
        </View>
        <CategoryTextSlider/>
        <TopHeadlineSlider newsList={newsList}/>
        <HeadlineList newsList={newsList}/>
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