import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import HeaderImageSilde from "./HeaderImageSilde";

const ImageSlide = ({ list }) => {
  return (
    <View>
      <FlatList
        data={list}
        horizontal
        showsHorizontalScrollIndicator={false}
        decelerationRate="fast"
        keyExtractor={(i) => i.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity style={{ margin:20 }}>
              <View style={styles.card}>
                <View style={styles.imageBox}>
                    <Image source={item.image} style={styles.image} />
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default ImageSlide;

const styles = StyleSheet.create({
  card: {
    width:280,
    height:230,
    marginVertical:10
  },
  HeaderImage:{
  },
  imageBox:{
    width:290,
    height:180,
    borderRadius:30,
    overflow:'hidden',
    elevation:12
  },
  image:{
    width: 290,
    height: 230,
    resizeMode:"cover"
  }
});
