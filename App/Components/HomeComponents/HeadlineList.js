import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Color from '../../Shared/Color'
import { useNavigation } from '@react-navigation/native';

const HeadlineList = ({newsList}) => {
  const navigation=useNavigation();
  return (
    <View>
        <FlatList
        showsVerticalScrollIndicator={false}
        data={newsList}
        renderItem={({item})=>(
           <View>
            <View style={{height:1,backgroundColor:Color.lightGray,marginTop:15}}></View>
             <TouchableOpacity onPress={()=>navigation.navigate('read-news',{news:item})} style={{marginTop:15,display:'flex',flexDirection:'row',gap:10}}>
                <Image source={{uri:item?.urlToImage}} style={{width:130,height:130,borderRadius:10}}/>
                <View style={{marginRight:130}}>
                 <Text numberOfLines={4} style={{fontSize:18,fontWeight:'bold'}}>{item?.title}</Text>
                 <Text style={{color:Color.primary,marginTop:7}}>{item?.source?.name}</Text>
                </View>
            </TouchableOpacity>
           </View>
        )}
        />
    </View>
  )
}

export default HeadlineList