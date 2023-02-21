import { View, Text, TextInput, FlatList, Image } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons'
import products from '../../data/ProductService'


export default function SearchFilter({data,input,setinput}) {
  return (
    <View>
      <FlatList data={data} renderItem={({item}) => {
        if(input === ""){
          return(
            <View style={{marginVertical:10}} >
              <Text style={{fontSize:14,fontWeight:'bold'}} >{item.name}</Text>
              <Text style={{borderColor:"gray",borderWidth:1,height:1,marginTop:5}} ></Text>
            </View>
          )
        }
        if(item.name.tolowerCase().includes(input.tolowerCase())){
          return(
            <View style={{marginVertical:10}} >
              <Text style={{fontSize:14,fontWeight:'bold'}} >{item.name}</Text>
              <Text style={{borderColor:"gray",borderWidth:1,height:1,marginTop:5}} ></Text>
            </View>
          )
        }
      }} />
    </View>
  )
}