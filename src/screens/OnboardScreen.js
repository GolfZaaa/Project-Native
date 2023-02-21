import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Lottie from "lottie-react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import LoginScreen from "./LoginScreen";
import { UseOrientation } from "../component/UseOrientation";

const slides = [
  {
    id: 1,
    title: "Discovery the favorite shop",
    description: 'it is recommended that you complete this assign to improve your all skins for beginner languages. ',
    Lottie: require("../../assets/Animation/OnboardScreen1.json"),
  },
  {
    id: 2,
    title: "Safe payment methods.",
    description: 'Thanks to fun event, you will follow your progress better and you will be able to socialize',
    Lottie: require("../../assets/Animation/OnboardScreen3.json"),
  },
  {
    id: 3,
    title: "Pick up the favorite things",
    description: '"With timely notifications you miss lessons and homework and you have to worry "',
    Lottie: require("../../assets/Animation/OnboardScreen2.json"),
  },
];

export default function OnboardScreen() {
  const [showHomepage, setHomePage] = useState(false);

  const buttonLabel = (label) => {
    return (
      <View style={{ padding: 12 }}>
        <Text style={{ fontSize: 17, fontWeight: "700" }}>{label}</Text>
      </View>
    );
  };


  if (!showHomepage) {


    return (
              <AppIntroSlider
        data={slides}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                alignItems: "center",
                padding: 15,
                paddingTop: 20,
                backgroundColor: "#ffffff",
                flex:3,
              }}
            >
              <View style={{backgroundColor:'#f3f38b',position:'absolute',width:500,height:360,borderRadius:140,bottom:280}}></View>
              <Lottie
                source={item.Lottie}
                autoPlay
                loop
                style={{
                  width: 340,
                  height: 300,
                  marginBottom: 50,
                  right: 0,
                  marginTop: 20,
                }}
                resizeMode="contain"
              />
              <View style={{ bottom: 5, alignItems: "center" }}>
                <Text
                  style={{ fontWeight: "900", color: "#5c5b5b", fontSize: 20,marginBottom:15 }}
                >
                  {item.title}
                </Text>

                <Text
                  style={{
                    textAlign: "center",
                    paddingTop: 5,
                    color: "#5c5b5b",
                  }}
                >
                  {item.description}
                </Text>
              </View>
            </View>
          );
        }}
        activeDotStyle={{
          backgroundColor: "#000",
          width: 40,
        }}
        showSkipButton
        renderNextButton={() => buttonLabel("Next")}
        renderSkipButton={() => buttonLabel("Skip")}
        renderDoneButton={() => buttonLabel("Done")}
        onDone={() => {
          setHomePage(true);
        }}
      />
    );
  }

  return (
    <View>
      <LoginScreen />
    </View>
  );
}

const styles = StyleSheet.create({});
