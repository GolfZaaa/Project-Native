import { View, Text, StyleSheet, Pressable,Button,TouchableHighlight } from "react-native";
import React from "react";
import { MaterialIcons } from '@expo/vector-icons';

const CustombuttonForgot = ({ onPress, text, type = "PRIMARY" }) => {
  return (
    // <Button
    //   onPress={onPress}
    //   style={[styles.container, styles[`container_${type}`]]}
    // >
    //   <Text style={[styles.text, styles[`text_${type}`]]}>
    //     Submit
    //     <View style={styles.icon}>
    //     </View>
    //   </Text>
    // /</Button>

<TouchableHighlight 
                style ={{
                    height: 40,
                    width:300,
                    borderRadius:10,
                    marginLeft :50,
                    marginRight:50,
                    marginTop :20
                }}>
            <Button onPress={onPress}         
            title="Continue"
            accessibilityLabel="Learn more about this button"
          /> 
          </TouchableHighlight> 
  );
};

const styles = StyleSheet.create({
  container: {
    width: "85%",
    padding: 11,
    marginVertical: 5,

    alignItems: "center",
    borderRadius: 10,
    top:10,
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
  icon:{
    top:3,
    flex:1,
    left:103,
  }
});

export default CustombuttonForgot;
