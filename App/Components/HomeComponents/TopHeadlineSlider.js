import { View, Text, FlatList, TouchableOpacity, Image, Dimensions } from 'react-native'
import Color from '../../Shared/Color';
import { useNavigation } from '@react-navigation/native';

const TopHeadlineSlider = ({newsList}) => {
    const navigation=useNavigation();
  return (
    <View style={{marginTop:20}}>
        <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={newsList}
        renderItem={({item})=>(
            <TouchableOpacity style={{width:Dimensions.get('screen').width*0.80,marginRight:15}} onPress={()=>navigation.navigate('read-news',{news:item})}>
                <Image source={{uri:item?.urlToImage}} style={{height:Dimensions.get('screen').width*0.77,borderRadius:10}}/>
                <Text numberOfLines={2} style={{marginTop:10,fontSize:23,fontWeight:'bold'}}>{item.title}</Text>
                <Text style={{marginTop:10,color:Color.primary}}>{item?.source?.name}</Text>
            </TouchableOpacity>
        )}
        />
    </View>
  )
}

export default TopHeadlineSlider;