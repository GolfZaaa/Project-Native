import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

const ProductInto = ({ title, onPress, ButtonTitle = "Button" }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity onPress={() => {}}>
        <Text style={{ color: "black" }}>See All</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProductInto;

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginHorizontal:20,
        bottom:50,
    },
    title:{
        fontWeight:'bold',
        fontSize:17
    }
});

