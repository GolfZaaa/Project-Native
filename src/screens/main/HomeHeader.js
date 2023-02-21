import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Octicons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from "@react-navigation/native";

const HomeHeader = ({title}) => {
  const navigation = useNavigation();
  
  const openDrawer = () => navigation.toggleDrawer();

  return (
    <View style={[styles.container]}>
        <Octicons name="three-bars" size={30} color="black" onPress={openDrawer}/>
        <Text style={{fontWeight:'bold',fontSize:20}}>{title}</Text>
        <Fontisto name="opencart" size={24} color="black" onPress={() =>{}} />
    </View>
  )
}

export default HomeHeader

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        margin:10,
        paddingHorizontal:10
    }
})