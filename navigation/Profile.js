import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  SectionList,
  StatusBar,
  Image
} from "react-native";
import React from "react";
import { Octicons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";

const DATA = [
  {
    title: "Main dishes",
    data: [require("../assets/images/1.png"), require("../assets/images/1.png"),  require("../assets/images/1.png")],
  },
  {
    title: "Sides",
    data: [ require("../assets/images/1.png"),  require("../assets/images/1.png"),  require("../assets/images/1.png")],
  },
  {
    title: "Drinks",
    data: [ require("../assets/images/1.png"),  require("../assets/images/1.png"),  require("../assets/images/1.png")],

  },
];

export default function Profile({ navigation }) {
  const openDrawer = () => navigation.toggleDrawer();

  return (
    <SafeAreaView style={{backgroundColor:'white',marginBottom:90}}>
      <View style={[styles.container1]}>
        <Octicons
          name="three-bars"
          size={30}
          color="black"
          onPress={openDrawer}
        />
        <Text style={{ fontWeight: "bold", fontSize: 20 }}></Text>
        <Fontisto name="opencart" size={24} color="black" onPress={() => {}} />
      </View>

      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Image  source={item} style={{width:400,height:200,right:20,}} />
          </View>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>{title}</Text>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  },
  item: {
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
  },
  title: {
    fontSize: 24,
  },
  container1: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 30,
    backgroundColor: "white",
    width: 373,
    paddingTop: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    right: 24,
    bottom: 10,
    margin: 10,
  },
});
