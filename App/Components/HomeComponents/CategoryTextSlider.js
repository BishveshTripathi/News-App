import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import Colors from '../../Shared/Color';

const CategoryTextSlider = ({selectCategory}) => {

    const[active,setActive]=useState(1);

    const categoryList=[
        {
            id:1,
            name:'Latest'
        },
        {
            id:2,
            name:'World'
        },
        {
            id:3,
            name:'Business'
        },
        {
            id:4,
            name:'Sports'
        },
        {
            id:5,
            name:'Life'
        },
        {
            id:6,
            name:'Movie'
        }
    ]

    const onCategoryClick=(id)=>{
        setActive(id);
    }

  return (
    <View>
      <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={categoryList}
      renderItem={({item})=>(
        <TouchableOpacity onPress={()=>{onCategoryClick(item.id)
        selectCategory(item.name)}}>
            <Text style={
                item.id == active ? styles.selectText : styles.unselectText}>{item.name}</Text>
        </TouchableOpacity>
      )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    unselectText:{
        marginTop:10,
        marginRight:20,
        fontSize:17,
        fontWeight:'500',
        color:Colors.gray
    },
    selectText:{
        marginTop:10,
        marginRight:20,
        fontSize:17,
        fontWeight:'bold',
        color:Colors.primary
    }
})

export default CategoryTextSlider

// 1f7b094a99a3406998ff77add398cafe