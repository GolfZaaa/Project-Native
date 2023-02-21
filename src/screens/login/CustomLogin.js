import { View, Text, StyleSheet, Pressable,TouchableWithoutFeedback } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

const CustomLogin = ({ onPress, text, type = "PRIMARY" }) => {
  return (
    <View style={{ flexDirection: "row",marginTop:20 }}>
      <Text>Joined us before? </Text>
      <TouchableWithoutFeedback onPress={onPress}>
        <Text style={{color:'#2002e0',fontWeight:'700'}}>Login</Text>
      </TouchableWithoutFeedback >
    </View>
  );
};

const styles = StyleSheet.create({

});

export default CustomLogin;
