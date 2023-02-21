import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const HeaderImageSilde = () => {
  return (
    <View style={{backgroundColor:'#fff',padding:4,left:245,top:15,zIndex:1,borderRadius:15,position:'absolute'}}>
<FontAwesome5 name="heart" size={24} color="black" />
    </View>
  )
}

export default HeaderImageSilde

const styles = StyleSheet.create({})