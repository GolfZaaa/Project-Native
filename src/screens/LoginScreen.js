import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  Alert,
  ActivityIndicator,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import Logo from "../../assets/images/Logo.png";
import CustomInputLogin from "./login/CustomInputLogin";
import CustomButton from "./login/CustomButton";
import CustomButtonFB from "./login/CustomButtonFB";
import CustomButtonGoogle from "./login/CustomButtonGoogle";
import Googlepng from "../../assets/images/Icon/google.png";
import facebookpng from "../../assets/images/Icon/facebook.png";
import twitchpng from "../../assets/images/Icon/twitch.png";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import CustomRegister from "./login/CustomRegister";
import CustomForgetPassword from "./login/CustomForgetPassword";
import Loginicon from "../../assets/images/Icon/Loginicon.png";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Keyboard } from "react-native";
import ToastError from "../component/ToastError";
import Toastsuccess from "../component/Toastsuccess";

export default function LoginScreen() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  // toast start
  const [toasterror, settoasterror] = useState(false);
  const [toastsuccess, settoastsuccess] = useState(false);

  // toast end

  const [showLoad, setshowLoad] = useState(false);

  const onSubmit = () => {
    if (username === "golf" && password === "55555") {
      setshowLoad(true);

      setTimeout(() => {
        setshowLoad(false);
      }, 3000);

      setTimeout(function () {
        settoastsuccess(!toastsuccess);
      }, 1000);

      setTimeout(() => {
        navigation.navigate("Drawer");
      }, 3000);
    } else {
      {
        settoasterror(!toasterror);
      }
    }
  };

  const { height } = useWindowDimensions();

  const navigation = useNavigation();

  const onLoginPressed = () => {
    navigation.navigate("Drawer");
  };

  const Register = () => {
    // console.warn("Register");
    navigation.navigate("Register");
  };

  const ForgotPassword = () => {
    // console.warn("Password");
    navigation.navigate("ForgotPassword");
  };

  return (
    <ScrollView>
      <KeyboardAvoidingView
      behavior="height"
      enabled
    >
      <View style={style.root}>
        {toasterror && <ToastError />}
        {toastsuccess && <Toastsuccess />}
        <Image source={Loginicon} style={style.logo} />

        <Text
          style={{
            fontSize: 27,
            fontWeight: "800",
            color: "#333",
            bottom: 25,
            marginRight: 220,
          }}
        >
          Login
        </Text>

        <View
          style={{
            flexDirection: "row",
            borderBottomColor: "#ccc",
            borderBottomWidth: 1,
            paddingBottom: 8,
            marginBottom: 12,
            width: 270,
            bottom: 5,
          }}
        >
          <MaterialIcons
            name="alternate-email"
            size={24}
            color="#666"
            style={{ marginRight: 10 }}
          />

          <View>
            <TextInput
              placeholder="Email"
              style={{ flex: 1, paddingVertical: 0 }}
              keyboardType="email-address"
              onChangeText={(value) => setusername(value)}
            />
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            borderBottomColor: "#ccc",
            borderBottomWidth: 1,
            paddingBottom: 8,
            marginBottom: 10,
            width: 270,
          }}
        >
          <Ionicons
            name="ios-lock-closed-outline"
            size={24}
            color="#666"
            style={{ marginRight: 10 }}
          />
          <TextInput
            placeholder="Password"
            style={{ flex: 1, paddingVertical: 0 }}
            secureTextEntry={true}
            onChangeText={(value) => setpassword(value)}
            keyboardType="numeric"
          />
        </View>

        <CustomForgetPassword onPress={ForgotPassword} />

        <ActivityIndicator
          size={"large"}
          color="red"
          style={{ left: 170, top: 395, zIndex: 3, position: "absolute" }}
          animating={showLoad}
        />

        <CustomButton
          text={!showLoad ? "Continue" : " "}
          onPress={onSubmit}
          title={showLoad}
        />

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            top: 15,
          }}
        >
          <View>
            <Text style={style.or}>__________________</Text>
          </View>
          <Text style={style.line}>Or Login with...</Text>
          <View>
            <Text style={style.or}>__________________</Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 10,
            top: 15,
          }}
        >
          <TouchableOpacity
            onPress={() => {}}
            style={{
              borderColor: "#ddd",
              borderWidth: 2,
              borderRadius: 10,
              paddingHorizontal: 25,
              paddingVertical: 5,
            }}
          >
            <Image source={Googlepng} style={style.iconG} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {}}
            style={{
              borderColor: "#ddd",
              borderWidth: 2,
              borderRadius: 10,
              paddingHorizontal: 22,
              paddingVertical: 1,
              marginLeft: 20,
              marginRight: 20,
            }}
          >
            <Image
              source={facebookpng}
              style={style.iconF}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {}}
            style={{
              borderColor: "#ddd",
              borderWidth: 2,
              borderRadius: 10,
              paddingHorizontal: 22,
              paddingVertical: 1,
            }}
          >
            <Image source={twitchpng} style={style.iconT} />
          </TouchableOpacity>
        </View>

        <CustomRegister onPress={Register} />
      </View>
    </KeyboardAvoidingView>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  logo: {
    width: 470,
    height: 220,
    bottom: 30,
  },
  root: {
    alignItems: "center",
    padding: 10,
    backgroundColor: "#fff",
    height: "100%",
  },
  textemail: {
    right: 90,
    fontWeight: "600",
    marginTop: 20,
  },
  textepassword: {
    right: 90,
    fontWeight: "600",
  },
  textfont: {
    fontWeight: "600",
    bottom: 5,
  },
  line: {
    margin: 5,
    color: "#8d8d8d",
  },
  or: {
    color: "#e3e3e3",
  },
  iconG: {
    width: 30,
    height: 30,
  },
  iconF: {
    width: 40,
    height: 40,
  },
  iconT: {
    width: 40,
    height: 40,
  },
});
