import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { MaterialIcons } from '@expo/vector-icons';

const CustomButtonGoogle = ({ onPress, text, type = "PRIMARY" }) => {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.container, styles[`container_${type}`]]}
    >
      <Text style={[styles.text, styles[`text_${type}`]]}>
        {text}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "95%",
    padding: 11,
    marginVertical: 5,

    alignItems: "center",
    borderRadius: 35,
  },
  container_PRIMARY: {
    backgroundColor: "#3B71F3",
  },
  container_TERTIARY: {},
  text: {
    fontWeight: "bold",
    color: "white",
    left:7,
  },
  text_TERTIARY: {
    color: "gray",
  },
});

export default CustomButtonGoogle;
