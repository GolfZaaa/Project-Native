import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

const CustomForgetPassword = ({ onPress, text, type = "PRIMARY" }) => {
  return (
    <View style={{ flexDirection: "row"}}>
      <Pressable onPress={onPress}>
        <Text style={{color:'#7763f8',fontWeight:'800',bottom:0,marginLeft:170}}>Forgot Password?</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({

});

export default CustomForgetPassword;
