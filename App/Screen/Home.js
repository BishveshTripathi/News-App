import { View, Text, StyleSheet } from 'react-native'
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import CategoryTextSlider from '../Components/HomeComponents/CategoryTextSlider';
import TopHeadlineSlider from '../Components/HomeComponents/TopHeadlineSlider';

const Home = () => {
  return (
    <View>
        <View style={{display:'flex',flexDirection:"row",justifyContent:'space-between',alignItems:'center'}}>
          <Text style={styles.appName}>Todays NEWS</Text>
          <Ionicons name="notifications-outline" size={28} color="black" />
        </View>
        <CategoryTextSlider/>
        <TopHeadlineSlider/>
    </View>
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