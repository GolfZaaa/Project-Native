import { View, Text, Image, StyleSheet, Button, ScrollView } from "react-native";
import React, { useState } from "react";
import CustomButton from "./login/CustomButton";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import CustomRegister from "./login/CustomRegister";
import CustomForgetPassword from "./login/CustomForgetPassword";
import Registericon from "../../assets/images/Icon/Registericon.png";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import CustomButtonRegister from "./login/CustomButtonRegister";
import CustomLogin from "./login/CustomLogin";
import { useHeaderHeight } from "@react-navigation/elements";

export default function RegisterScreen() {
  const navigation = useNavigation();

  // start rount 
  const onLoginPressed = () => {
    //   console.warn("Login s");
    navigation.navigate("Home");
  };
  const Register = () => {
    //   console.warn("Register");
    navigation.navigate("Register");
  };

  const ForgotPassword = () => {
    // console.warn("Password");
    navigation.navigate("ForgotPassword");
  };

  const Login = () => {
    // console.warn("Password");
    navigation.navigate("Login");
  };

  //end rount เส้นทาง

  //start เป็นการเลือกเวลาแบบปฏิทิน

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const [selectedDate, setselectedDate] = useState("Date of Birth");

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    // console.warn("A date has been picked: ", date);
    const D = new Date(date);
    const A = D.toISOString().split("T");
    const B = A[0].split("-");
    //  console.log(B[2] + '/' + B[1] + '/' + B[0]);
    setselectedDate(B[2] + "/" + B[1] + "/" + B[0]);
    hideDatePicker();
  };

  //end เป็นการเลือกเวลาแบบปฏิทิน


  return (
    <ScrollView>
          <View style={style.root}>
      <Image source={Registericon} style={style.logo} />
      <Text
        style={{
          fontSize: 27,
          fontWeight: "800",
          color: "#333",
          bottom: 25,
          marginRight: 220,
        }}
      >
        Register
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
          bottom: 5,
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
        />
      </View>

      <View
        style={{
          flexDirection: "row",
          borderBottomColor: "#ccc",
          borderBottomWidth: 1,
          paddingBottom: 8,
          marginBottom: 10,
          width: 270,
          bottom: 3,
        }}
      >
        <Ionicons
          name="phone-portrait-outline"
          size={24}
          color="#666"
          style={{ marginRight: 12 }}
        />

        <TextInput
          placeholder="Mobile"
          style={{ flex: 1, paddingVertical: 0 }}
        />
      </View>

      <View
        style={{
          flexDirection: "row",
          borderBottomColor: "#ccc",
          borderBottomWidth: 1,
          paddingBottom: 8,
          marginBottom: 10,
          width: 270,
          top: 1,
        }}
      >
        <Ionicons
          name="calendar-outline"
          size={24}
          color="#666"
          style={{ marginRight: 12 }}
        />

        <TouchableOpacity onPress={showDatePicker}>
          <Text style={{ top: 4, color: "#666" }}>{selectedDate}</Text>
        </TouchableOpacity>
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
      </View>

      <View style={{ flexDirection: "row" }}>
        <Text style={{ color: "#757575", fontWeight: "500", fontSize: 12 }}>
          By signing up, you're agree to our
        </Text>
        <Text style={{ color: "#2002e0", fontWeight: "500", fontSize: 12 }}>
          Terms & Conditions
        </Text>
      </View>

      <View style={{ flexDirection: "row" }}>
        <Text style={{ color: "#757575", fontSize: 12 }}>and </Text>
        <Text style={{ color: "#2002e0", fontWeight: "500", fontSize: 12,marginRight:182}}>Privacy Policy</Text>
      </View>
      <CustomButtonRegister text="Continue" onPress={Login} />

      <CustomLogin onPress={Login}  />
    </View>
    </ScrollView>

  );
}

const style = StyleSheet.create({
  logo: {
    width: 350,
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
