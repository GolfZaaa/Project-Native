import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Animated, { FadeInUp, FadeOutUp } from "react-native-reanimated";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const Toastsuccess = () => {
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <Animated.View
        entering={FadeInUp}
        exiting={FadeOutUp}
        style={{
          top: 35,
          backgroundColor: "#11ff00",
          width: "90%",
          position: "absolute",
          borderRadius: 5,
          padding: 20,
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
          elevation: 10,
          zIndex: 3,
        }}
      >
        <Feather name="check" size={28} color="white" />
        <View>
          <Text
            style={{
              color: "#f6f4f4",
              fontWeight: "bold",
              marginLeft: 10,
              fontSize: 16,
            }}
          >
            Success!
          </Text>
          <Text
            style={{
              color: "#f6f4f4",
              fontWeight: "400",
              marginLeft: 10,
              fontSize: 13,
            }}
          >
            You are welcome!
          </Text>
        </View>
      </Animated.View>
    </View>
  );
};

export default Toastsuccess;

const styles = StyleSheet.create({});
