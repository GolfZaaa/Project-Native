import { View, Text, TextInput,StyleSheet } from 'react-native'
import React from 'react'

export default function CustomInputLogin({value, setValue, placeholder, secureTextEntry}) {
  return (
    <View style={style.container}>
      <TextInput value={value} onChangeText={setValue} placeholder={placeholder} style={style.input} secureTextEntry={secureTextEntry} />
    </View>
  )
}

const style = StyleSheet.create({
    container:{
        backgroundColor:'white',
        width:'95%',

        borderColor:'#e8e8e8',
        borderWidth:1,
        borderRadius:5,
        borderRadius:35,

        paddingHorizontal:10,
        padding:7,

        marginVertical:10,
        marginVertical:5,
        marginBottom:20,
    },
    input:{},
})