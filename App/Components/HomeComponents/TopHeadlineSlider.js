import { View, Text, FlatList, TouchableOpacity, Image, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../../Services/GlobalApi'
import Color from '../../Shared/Color';

const TopHeadlineSlider = () => {
    const[newsList,setNewsList]=useState([]);
    useEffect(()=>{
        getTopHeadline();
    },[])

    const getTopHeadline=async()=>{
        const result=(await GlobalApi.getTopHeadline).data;
        setNewsList(result.articles);
    }

  return (
    <View style={{marginTop:20}}>
        <FlatList
        horizontal
        data={newsList}
        renderItem={({item})=>(
            <TouchableOpacity style={{width:Dimensions.get('screen').width*0.80,marginRight:15}}>
                <Image source={{uri:item?.urlToImage}} style={{height:Dimensions.get('screen').width*0.77,borderRadius:10}}/>
                <Text style={{marginTop:10,fontSize:20,fontWeight:'bold'}}>{item.title}</Text>
                <Text style={{marginTop:10,color:Color.primary}}>{item?.source?.name}</Text>
            </TouchableOpacity>
        )}
        />
    </View>
  )
}

export default TopHeadlineSlider;