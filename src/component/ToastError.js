import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Animated, { FadeInUp, FadeOutUp } from "react-native-reanimated";
import { MaterialCommunityIcons } from '@expo/vector-icons';

const ToastError = () => {
  return (
    <View style={{justifyContent:'center',alignItems:'center'}} >
      <Animated.View
        entering={FadeInUp}
        exiting={FadeOutUp}
        style={{
          top: 35,
          backgroundColor: "#ec3939",
          width: "90%",
          position: "absolute",
          borderRadius: 5,
          padding: 20,
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
          elevation: 10,
          zIndex:3,
        }}
      >
        <MaterialCommunityIcons name="shield-alert" size={28} color="white" />
        <View>
          <Text
            style={{
              color: "#f6f4f4",
              fontWeight: "bold",
              marginLeft: 10,
              fontSize: 16,
            }}
          >
            Error!
          </Text>
          <Text
            style={{
              color: "#f6f4f4",
              fontWeight: "400",
              marginLeft: 10,
              fontSize: 13,
            }}
          >
            This is an error message
          </Text>
        </View>
      </Animated.View>
    </View>
  );
};

export default ToastError;

const styles = StyleSheet.create({});
