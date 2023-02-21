import { View, Text,StyleSheet } from 'react-native'
import { Octicons } from "@expo/vector-icons";
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Fontisto } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import AnimatedLottieView from 'lottie-react-native';



export default function CartScreen() {

  const navigation = useNavigation();

  const back = () => {
    // console.warn("Password");
    navigation.goBack();
  };

  return (
    <View>
      <Ionicons name="arrow-back" size={24} color="gray" onPress={back} style={{marginRight:305,top:5}} />
      <AnimatedLottieView
        style={{width:410,height:340,paddingBottom:20,bottom:15}}
        source={require('../../assets/Animation/Emty.json')}
        autoPlay
        />
        <Text style={{fontSize:32,color:'gray',fontWeight:'500',left:40,bottom:20}}>Your cart is empty</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 10,
    paddingHorizontal: 10,
  },
});