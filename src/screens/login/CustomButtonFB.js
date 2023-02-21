import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'

const CustomButtonFB = ({onPress, text}) => {
  return (
    <Pressable onPress={onPress} style={style.container}>
      <Text style={style.text}>{text}</Text>
    </Pressable>
  )
}

const style = StyleSheet.create({
    container:{
        backgroundColor:'#f9fbfc',
        width: '95%',
        padding:10,
        marginVertical:5,

        alignItems:'center',
        borderRadius:35,
        borderWidth:1,
        marginTop:12,
    },
    container_PRIMARY:{
        backgroundColor:'#3B71F3',

    },
    container_TERTIARY:{

    },
    text:{
        fontWeight:'bold',
        color:'#000000'
    },
    text_TERTIARY:{
        color:'gray',
    }
})

export default CustomButtonFB