import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  StatusBar,
  ScrollView,
  RefreshControl,
} from "react-native";
import React, { useEffect, useState } from "react";
import { PRODUCTSListALL } from "../data/ProductAll";

import { Octicons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import ImageSlide from "./product/ImageSlide";
import { PRODUCTALL } from "../data/Product";
import { AntDesign } from '@expo/vector-icons';

const ProductTest = ({ navigation }) => {


  const [product, setproducts] = useState([]);
  const [accessory, setaccessory] = useState([]);

  

  const openDrawer = () => navigation.toggleDrawer();

  const CardScreen = () => {
    navigation.navigate("Cart");
  };

  useEffect(() => {
    const unsub = navigation.addListener("focus", () => {
      DatabaseProduct();
    });

    return unsub;
  }, [navigation]);

  const [refresh,setrefresh] = useState(false)

  const pull = () => {
    setrefresh(true)

    setTimeout(() => {
      setrefresh(false)
    },10000)
  }

  const DatabaseProduct = () => {
    let productList = [];
    let accessoryList = [];

    for (let index = 0; index < PRODUCTSListALL.length; index++) {
      if (PRODUCTSListALL[index].category == "product") {
        productList.push(PRODUCTSListALL[index]);
      } else if (PRODUCTSListALL[index].category == "accessory") {
        accessoryList.push(PRODUCTSListALL[index]);
      }
    }
    setproducts(productList);
    setaccessory(accessoryList);
  };

  

  //create product
  const ProductCard = ({data}) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("ProductDetail", { productID: data.id })
        }  
      >
        <View style={{marginLeft:5,marginBottom:10,top:30}}>
        <View style={{width:155,height:230,backgroundColor:'#fff',borderRadius:16,elevation:10,}}>
        <View style={{width:155,height:230,borderTopLeftRadius:16,borderTopRightRadius:16,overflow:'hidden'}}>
        <Image source={data.productImage} style={{width:160,height:160,resizeMode:'cover'}} />
        <Text>{data.productName} </Text>
        <View style={{flexDirection:'row'}}>
        <Text style={{color:'red',fontWeight:'500'}}> <Text style={{fontSize:13,fontWeight:'700'}} >$</Text> {data.productPrice}</Text>
        <Text></Text>
        </View>
          <View style={{flexDirection:'row'}}>
          <AntDesign name="star" size={14} color="orange" />
          <Text style={{left:4,bottom:0,fontSize:12}}>{data.rating}</Text>
          <Text style={{left:8,bottom:2,color:'gray'}}>| <Text style={{fontSize:12}}>{data.sellalready} Sold</Text></Text>
          </View>
        </View>
        </View>
        </View>
      </TouchableOpacity>
    );
  };

  
  return (
    <ScrollView refreshControl={<RefreshControl refreshing={refresh} onRefresh={() => pull} />} >
    <View style={{ width: "100%", height: "100%", backgroundColor: "#fff",marginBottom:30 }}>

      <View style={[styles.container]}>
        <Octicons
          name="three-bars"
          size={30}
          color="black"
          onPress={openDrawer}
        />
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>Product</Text>
        <Fontisto name="opencart" size={24} color="black" onPress={CardScreen} />
      </View>

      <ImageSlide list={PRODUCTALL}  />


      <StatusBar backgroundColor={"#fff"} barStyle="dark-content" />

        <View
          style={{
            padding: 16,
            bottom:40
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: 18,
                  color: 'black',
                  fontWeight: '500',
                  letterSpacing: 1,
                }}>
                Product
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  color: 'black',
                  fontWeight: '400',
                  opacity: 0.5,
                  marginLeft: 10,
                }}>
                78
              </Text>
            </View>
            <Text
              style={{
                fontSize: 14,
                color: 'blue',
                fontWeight: '400',
              }}>
              SeeAll
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-around',
            }}>
            {accessory.map(data => {
              return <ProductCard data={data} key={data.id} />;
            })}
          </View>
        </View>

    </View>
    </ScrollView>
  );
};

export default ProductTest;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 10,
    paddingHorizontal: 10,
  },
});
