import { View, Text, Image } from 'react-native'
import React, { useEffect } from 'react'
import { useRoute } from '@react-navigation/native'
import Color from '../Shared/Color';

const ReadNews = () => {
    const news=useRoute().params.news;
    useEffect(()=>{
        console.log(news);
    },[])
  return (
    <View style={{backgroundColor:Color.white}}>
        <Image source={{uri:news.urlToImage}} style={{width:'100%',height:300,borderRadius:15}}/>
        <Text style={{marginTop:10,fontSize:22,fontWeight:'bold'}}>{news.title}</Text>
        <Text style={{marginTop:10,fontSize:16,color:Color.primary}}>{news.source.name}</Text>
        <Text style={{marginTop:10,fontSize:18,color:Color.gray,lineHeight:30}}>{news.description}</Text>
    </View>
  )
}

export default ReadNews