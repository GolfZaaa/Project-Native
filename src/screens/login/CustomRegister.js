import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

const CustomRegister = ({ onPress, text, type = "PRIMARY" }) => {
  return (
    <View style={{ flexDirection: "row",marginTop:40 }}>
      <Text>New to Logistics? </Text>
      <Pressable onPress={onPress}>
        <Text style={{color:'#2002e0',fontWeight:'700'}}>Register</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({

});

export default CustomRegister;
