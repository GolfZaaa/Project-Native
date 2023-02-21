import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { PRODUCTSListALL } from "../data/ProductAll";
import { Rating as RateingMain } from "react-native-ratings";

import { Octicons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { color } from "react-native-reanimated";

const ProductDetailScreen = ({ route, navigation }) => {
  const { productID } = route.params;

  const [product, setproducts] = useState({});

  useEffect(() => {
    const unsub = navigation.addListener("focus", () => {
      DatabaseProduct();
    });
    return unsub;
  }, [navigation]);

  // get product detail id for id
  const DatabaseProduct = async () => {
    for (let index = 0; index < PRODUCTSListALL.length; index++) {
      if (PRODUCTSListALL[index].id == productID) {
        await setproducts(PRODUCTSListALL[index]);
        return;
      }
    }
  };

  const back = () => {
    // console.warn("Password");
    navigation.goBack();
  };

  console.log(product);

  return (
    <>
      <View
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "#ffffff",
          position: "relative",
        }}
      >
        <StatusBar backgroundColor="#F0F0F3" barStyle="dark-content" />
        <ScrollView>
          <View
            style={{
              width: "100%",
              backgroundColor: "#F0F0F3",
              borderBottomRightRadius: 20,
              borderBottomLeftRadius: 20,
              position: "relative",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 4,
            }}
          >
            <View
              style={{
                width: "100%",
                flexDirection: "row",
                justifyContent: "space-between",
                paddingTop: 16,
                paddingLeft: 16,
              }}
            >
              <TouchableOpacity onPress={back}>
                <Entypo
                  name="chevron-left"
                  style={{
                    fontSize: 18,
                    color: "#777777",
                    padding: 12,
                    backgroundColor: "#ffffff",
                    borderRadius: 10,
                  }}
                />
              </TouchableOpacity>
            </View>
            <View>
              <Image
                source={product.productImage}
                style={{ width: 300, height: 200, top: 20 }}
              />
            </View>
            <View
              style={{
                width: "100%",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 16,
                marginTop: 32,
              }}
            ></View>
          </View>
          <View
            style={{
              paddingHorizontal: 16,
              marginTop: 3,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginVertical: 10,
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  color: "red",
                  fontWeight: "700",
                }}
              >
                <Text style={{ fontSize: 15 }}>฿</Text> {product.productPrice}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                marginVertical: 1,
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "600",
                  letterSpacing: 0.5,
                  marginVertical: 4,
                  color: "#000000",
                  maxWidth: "93%",
                }}
              >
                {product.productName}
              </Text>
            </View>
            <View style={{ flexDirection: "row", marginBottom: 20 }}>
              <RateingMain
                fractions={1}
                startingValue={product.rating}
                imageSize={12}
                readonly
                style={{top:12}}
              />
              <Text style={{ color: "gray", fontSize: 13, top: 8 }}>
                {" "}
                | {product.sellalready} sold
              </Text>

              <Feather
                name="heart"
                size={20}
                color="black"
                style={{ left: 125, top: 10 }}
              />
              <Entypo
                name="share"
                size={20}
                color="black"
                style={{ left: 145, top: 10 }}
              />
            </View>

            <Text style={{ color: "gray", fontSize: 13, fontWeight: "500" }}>
              Product details
            </Text>
            <Text
              style={{
                fontSize: 12,
                color: "black",
                fontWeight: "400",
                letterSpacing: 1,
                opacity: 0.5,
                lineHeight: 20,
                maxWidth: "95%",
                maxHeight: 44,
                marginBottom: 40,
              }}
            >
              {product.description}
            </Text>

            {/* delevery start */}
            <View style={{ marginBottom: 40, top: 15 }}>
              <Text style={{ fontSize: 15, fontWeight: "500" }}>Delivery</Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginVertical: 14,
                  borderBottomColor: "#F0F0F3",
                  paddingBottom: 20,
                }}
              >
                <View
                  style={{
                    color: "#0043F9",
                    backgroundColor: "#7E16FC",
                    padding: 12,
                    borderRadius: 100,
                    marginRight: 10,
                    left: 20,
                  }}
                >
                  <MaterialCommunityIcons
                    name="clipboard-list"
                    size={20}
                    color="white"
                  />
                </View>
                <Text
                  style={{
                    position: "absolute",
                    color: "#7E16FC",
                    left: 75,
                    bottom: 35,
                  }}
                >
                  _________
                </Text>

                <View
                  style={{
                    color: "#0043F9",
                    backgroundColor: "#7E16FC",
                    padding: 10,
                    borderRadius: 100,
                  }}
                >
                  <MaterialCommunityIcons
                    name="bus-school"
                    size={24}
                    color="white"
                  />
                </View>

                <View
                  style={{
                    color: "#0043F9",
                    backgroundColor: "#7E16FC",
                    padding: 11,
                    borderRadius: 100,
                    right: 20,
                  }}
                >
                  <MaterialIcons name="location-on" size={22} color="white" />
                </View>
                <Text
                  style={{
                    position: "absolute",
                    left: 200,
                    color: "#7E16FC",
                    bottom: 35,
                  }}
                >
                  _________
                </Text>
              </View>
              <Text
                style={{
                  position: "absolute",
                  top: 90,
                  fontSize: 13,
                  color: "gray",
                }}
              >
                Local {product.local}
              </Text>
              <Text
                style={{
                  position: "absolute",
                  top: 90,
                  fontSize: 13,
                  color: "gray",
                  left: 120,
                }}
              >
                Order {product.order}
              </Text>
              <Text
                style={{
                  position: "absolute",
                  top: 90,
                  fontSize: 13,
                  color: "gray",
                  left: 236,
                }}
              >
                Singapore,Sing...
              </Text>
            </View>

            {/* delevery end */}

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginVertical: 14,
                borderBottomColor: "#F0F0F3",
                borderBottomWidth: 1,
                paddingBottom: 20,
                marginBottom: 30,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  width: "80%",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    color: "#0043F9",
                    backgroundColor: "#F0F0F3",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: 12,
                    borderRadius: 100,
                    marginRight: 10,
                  }}
                >
                  <Entypo name="location" size={20} color="blue" />
                </View>
                <Text> Rustaveli Ave 57,{"\n"}17-001, Batume</Text>
              </View>
              <Text style={{ color: "gray" }}>View All</Text>
              <Entypo
                name="chevron-right"
                style={{
                  fontSize: 22,
                  color: "#777777",
                }}
              />
            </View>

            {/* Review start */}
            <View style={{ marginBottom: 20 }}>
              <View style={{ flexDirection: "row" }}>
                <View>
                  <Text style={{ fontWeight: "700" }}>
                    Review{" "}
                    <Text style={{ color: "gray", fontWeight: "500" }}>
                      (5)
                    </Text>{" "}
                  </Text>
                </View>
                <View style={{ left: 195, flexDirection: "row" }}>
                  <Text style={{ color: "gray" }}>View All</Text>
                  <Entypo
                    name="chevron-right"
                    style={{
                      fontSize: 22,
                      color: "#777777",
                    }}
                  />
                </View>
              </View>

              <RateingMain
                fractions={1}
                startingValue={product.rating}
                imageSize={12}
                readonly
                style={{right:135}}
              />
              <View
                style={{
                  backgroundColor: "#efefef",
                  width: 320,
                  height: 120,
                  marginTop: 15,
                  borderRadius: 10,
                }}
              >
                <View style={{ flexDirection: "row" }}>
                  <Text
                    style={{
                      paddingTop: 15,
                      paddingLeft: 15,
                      flexDirection: "row",
                    }}
                  >
                    David{" "}
                  </Text>
                  <Text style={{ top: 17, left: 170 }}>
                    {" "}
                    <RateingMain
                      fractions={1}
                      startingValue={product.rating}
                      imageSize={12}
                      tintColor="#efefef"
                      readonly
                    />
                  </Text>
                </View>
                <View style={{ paddingLeft: 15, flexDirection: "row" }}>
                  <Text
                    style={{ maxWidth: "95%", color: "gray", paddingTop: 5 }}
                  >
                    {product.Review1}
                  </Text>
                </View>
              </View>
            </View>
            {/* Review end */}

            {/* Review 2 start */}
            <View
              style={{
                backgroundColor: "#efefef",
                width: 320,
                height: 120,
                marginTop: 15,
                borderRadius: 10,
                marginBottom: 20,
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <Text
                  style={{
                    paddingTop: 15,
                    paddingLeft: 15,
                    flexDirection: "row",
                  }}
                >
                  John{" "}
                </Text>
                <Text style={{ top: 17, left: 170 }}>
                  {" "}
                  <RateingMain
                    fractions={1}
                    startingValue={product.rating}
                    imageSize={12}
                    tintColor="#efefef"
                    readonly
                  />
                </Text>
              </View>
              <View style={{ paddingLeft: 15, flexDirection: "row" }}>
                <Text style={{ maxWidth: "95%", color: "gray", paddingTop: 5 }}>
                  {product.Review2}
                </Text>
              </View>
            </View>

            {/* Review 2 end */}

            {/* Review 3 start  */}

            <View
              style={{
                backgroundColor: "#efefef",
                width: 320,
                height: 120,
                marginTop: 15,
                borderRadius: 10,
                marginBottom: 70,
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <Text
                  style={{
                    paddingTop: 15,
                    paddingLeft: 15,
                    flexDirection: "row",
                  }}
                >
                  Brain{" "}
                </Text>
                <Text style={{ top: 17, left: 170 }}>
                  {" "}
                  <RateingMain
                    fractions={1}
                    startingValue={product.rating}
                    imageSize={12}
                    tintColor="#efefef"
                    readonly
                  />
                </Text>
              </View>
              <View style={{ paddingLeft: 15, flexDirection: "row" }}>
                <Text style={{ maxWidth: "95%", color: "gray", paddingTop: 5 }}>
                  {product.Review3}
                </Text>
              </View>
            </View>

            {/* Reveiw 3 end */}
          </View>
        </ScrollView>

        <View
          style={{
            position: "absolute",
            bottom: 10,
            height: "8%",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            onPress={() => (product.isAvailable ? addToCart(product.id) : null)}
            style={{
              width: "86%",
              height: "90%",
              backgroundColor: "#0043F9",
              borderRadius: 20,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 12,
                fontWeight: "500",
                letterSpacing: 1,
                color: "#fff",
                textTransform: "uppercase",
              }}
            >
              {product.isAvailable ? "Add to cart" : "Not Avialable"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default ProductDetailScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 10,
    paddingHorizontal: 10,
    backgroundColor: "#ccc",
    height: 40,
    borderRadius: 10,
  },
});
