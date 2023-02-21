import { StyleSheet, Text, View } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';
import React from 'react'

const HeaderProduct = () => {
  return (
    <View style={{backgroundColor:'#fff',position:'absolute',left:105}}>
<FontAwesome5 name="heart" size={24} color="black" />
    </View>
  )
}

export default HeaderProduct

const styles = StyleSheet.create({})