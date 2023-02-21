import {
  Image,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ImageBackground,
  Switch,
} from "react-native";
import "react-native-gesture-handler";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import Setting from "../Setting";
import { FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import Profile from "../Profile";
import { FontAwesome } from "@expo/vector-icons";
import Report from "../Report";
import { Caption, Title } from "react-native-paper";
import ProductTest from "../../src/screens/ProductTest";
import DrawerBackground from "../../assets/images/background.jpg";
import cha from "../../assets/images/cha.jpg";
import ModalScreen from "../../src/screens/ModalScreen";
import { useState } from "react";
import {UseOrientation} from "../../src/component/UseOrientation";

// const products = [
//   {
//     _id: "1",
//     name: "P1",
//   },
// ];

// const oneproduct = ({ item }) => <Text>{item.name}</Text>;

const Drawer = createDrawerNavigator();


const UserView = ({ isEnabled }) => {
const size = UseOrientation();

console.log(size.width)
  return (
    <>
        {size.width == 360 ? <View
      style={{
        height: 200,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#e3e1e3",
      }}
    >
      <ImageBackground
        source={DrawerBackground}
        style={{
          width: "100%",
          height: 200,
          position: "absolute",
          backgroundColor: "#e0dbdb",
        }}
        imageStyle={{ opacity: 0.3 }}
      ></ImageBackground>
      {isEnabled ? (
        <>
          <Image
            source={cha}
            style={{
              width: 140,
              height: 140,
              borderRadius: 40,
              borderColor: "#fff",
              borderWidth: 2,
              marginTop: 20,
            }}
          />
      <Title style={{ fontWeight: "500" }}>Chawanon</Title>
        </>
      ) : (   
        <>
        <Image
        source={{
          uri: 'https://static.thenounproject.com/png/3825456-200.png'
        }}
        style={{
          width: 140,
          height: 140,
          borderRadius: 40,
          borderColor: "#fff",
          borderWidth: 2,
          marginTop: 20,
        }}
      />
      <Title style={{ fontWeight: "500" }}>Annonimus</Title>
        </>
      )}
    </View>: null}
    </>
  );
};

const CustomDrawerCss = (props) => {

  // usestate switch start
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  // usestate switch end

  return (
    <View style={{ flex: 1 }}>
      <UserView isEnabled={isEnabled} />
      <DrawerContentScrollView>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>

      <View style={{ padding: 10, borderTopWidth: 1, borderTopColor: "#ccc" }}>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ top: 19, left: 20, fontSize: 16, fontWeight: "700" }}>
            Private Profile
          </Text>

          
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
            style={{ left: 50, top: 8 }}
          />
        </View>

        <TouchableOpacity onPress={() => {}} style={{ paddingVertical: 15 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Entypo name="login" size={22} style={{ marginLeft: 10 }} />
            <Text style={{ fontSize: 15, fontWeight: "600", marginLeft: 35 }}>
              Logout
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default function DrawerScreens({}) {
  //   const dimension = useWindowDimensions();
  //   const setdrawerType = dimension.width >= 700 ? "permanent" : "front";

  return (
    // <SafeAreaView>
    //   <FlatList data={products} renderItem={oneproduct} />
    // </SafeAreaView>
    <Drawer.Navigator
      initialRouteName="เมนูหลัก"
      screenOptions={{
        drawerType: "front",
        drawerStyle: { width: 240, backgroundColor: "#fff" },
        swipeEdgeWidth: 140,
        drawerLabelStyle: { marginLeft: 5, fontSize: 15, fontWeight: "600" },
        drawerActiveBackgroundColor: "#ea7318",
        drawerActiveTintColor: "#fff",
        drawerInactiveTintColor: "#000000",
        drawerInactiveBackgroundColor: "#fff",
        headerShown: false,
      }}
      drawerContent={(props) => <CustomDrawerCss {...props} />}
    >
      <Drawer.Screen
        name="Home"
        component={ProductTest}
        options={{
          drawerIcon: ({ color }) => (
            <Entypo name="home" size={24} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Picture"
        component={Profile}
        options={{
          drawerIcon: ({ color }) => (
            <FontAwesome5 name="user-alt" size={21} color={color} />
          ),
        }}
      />
      {/* <Drawer.Screen
        name="setting"
        component={Setting}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="settings" size={24} color={color} />
          ),
        }}
      /> */}
      <Drawer.Screen
        name="GIVEAWAY"
        component={ModalScreen}
        options={{
          drawerIcon: ({ color }) => (
            <FontAwesome5 name="gift" size={24} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  blurContainer: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "600",
  },
});
