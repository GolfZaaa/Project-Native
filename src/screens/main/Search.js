import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";
import SearchFilter from "./SearchFilter";


const products = [
  {
      id:"1",
      name:"Product1",
      image:"https://us-fbcloud.net/wb/data/1358/1358969-img.v66lh4.5u6ry.jpg",
      description:"Lore as ccdaw ewqasedsdsa cc",
      price:90,
      countInStock:3,
      rating:4,
      numReviews:4,
  },
  {
      id:"2",
      name:"Product2",
      image:"https://us-fbcloud.net/wb/data/1358/1358969-img.v66lh4.swwq.jpg",
      description:"Lore as ccdaw ewqasedsdsa cc",
      price:90,
      countInStock:3,
      rating:4,
      numReviews:4,
  },
  {
      id:"3",
      name:"Product3",
      image:"https://us-fbcloud.net/picpost/data/184/184340-31-1770.jpg",
      description:"Lore as ccdaw ewqasedsdsa cc",
      price:90,
      countInStock:3,
      rating:4,
      numReviews:4,
  },
  {
      id:"4",
      name:"Product4",
      image:"https://picpost.postjung.com/data/184/184340-1-2995.jpg",
      description:"Lore as ccdaw ewqasedsdsa cc",
      price:90,
      countInStock:3,
      rating:4,
      numReviews:4,
  },
  {
      id:"5",
      name:"Product5",
      image:"https://คลังสื่อการสอน.com/wp-content/uploads/2021/08/IMG_2114-683x1024.png",
      description:"Lore as ccdaw ewqasedsdsa cc",
      price:90,
      countInStock:3,
      rating:4,
      numReviews:4,
  },
  {
      id:"6",
      name:"Product6",
      image:"https://i.pinimg.com/474x/13/39/8b/13398b14c054e8b99c91d1feae0ee52f.jpg",
      description:"Lore as ccdaw ewqasedsdsa cc",
      price:90,
      countInStock:3,
      rating:4,
      numReviews:4,
  },
]

export default function Search() {

  const [input,setinput] = useState("")
  console.log(input)

  return (
    <View style={{ margin: 15, width: "90%" }}>
      <View
        style={{
          padding: 10,
          flexDirection: "row",
          width: "95%",
          backgroundColor: "#d9dbda",
          borderRadius: 10,
          alignItems: "center",
        }}
      >
        <Feather
          name="search"
          size={20}
          color="black"
          style={{ marginLeft: 1, marginRight: 4 }}
        />
        <TextInput value={input} onChangeText={(text) => setinput(text)} style={{ fontSize: 15 }} placeholder="Search" />
      </View>
      <SearchFilter data={products} input={input} setinput={setinput} />
    </View>
  );
}
