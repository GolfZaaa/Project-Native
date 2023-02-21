import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TouchableHighlight,
} from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

const CustomButtonRegister = ({ onPress, text, type = "PRIMARY" }) => {
  return (
    <TouchableHighlight
      activeOpacity={0.6}
      underlayColor="#DDDDDD"
      onPress={onPress}
      style={[styles.container, styles[`container_${type}`]]}
    >
      <Text style={[styles.text, styles[`text_${type}`]]}>
        {text}
        <View style={styles.icon}></View>
      </Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "95%",
    padding: 11,
    marginVertical: 5,

    alignItems: "center",
    borderRadius: 10,
    top: 10,
  },
  container_PRIMARY: {
    backgroundColor: "#3B71F3",
  },
  container_TERTIARY: {},
  text: {
    fontWeight: "bold",
    color: "white",
    left: 7,
  },
  text_TERTIARY: {
    color: "gray",
  },
  icon: {
    top: 3,
    flex: 1,
    left: 103,
  },
});

export default CustomButtonRegister;
