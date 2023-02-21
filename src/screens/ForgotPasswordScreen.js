import { View, Text, Image, StyleSheet, Button, KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import React, { useState } from "react";
import CustomButton from "./login/CustomButton";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import CustomRegister from "./login/CustomRegister";
import CustomForgetPassword from "./login/CustomForgetPassword";
import Forgoticon from "../../assets/images/Icon/Forgoticon.png";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import CustombuttonForgot from "./login/CustombuttonForgot";
import { Ionicons } from '@expo/vector-icons';
import { useHeaderHeight } from "@react-navigation/elements";

export default function ForgotPasswordScreen() {
  const navigation = useNavigation();

  // start rount เส้นทาง
  const onLoginPressed = () => {
    console.warn("Login s");
    navigation.navigate("Home");
  };
  const Register = () => {
    console.warn("Register");
    navigation.navigate("Register");
  };

  const OTP = () => {
    // console.warn("Password");
    navigation.navigate("OTP");
  };

  const back = () => {
    // console.warn("Password");
    navigation.goBack();
  };

  //end rount เส้นทาง

  //start เป็นการเลือกเวลาแบบปฏิทิน

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const [selectedDate, setselectedDate] = useState("Select Date");

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.warn("A date has been picked: ", date);
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
      <Ionicons name="arrow-back" size={24} color="gray" onPress={back} style={{marginRight:305,top:5}} />
      <Image source={Forgoticon} style={style.logo} />
      <Text
        style={{
          fontSize: 27,
          fontWeight: "800",
          color: "#333",
          bottom: 25,
          marginRight: 220,
        }}
      >
        Forgot
      </Text>
      <Text
        style={{
          fontSize: 27,
          fontWeight: "800",
          color: "#333",
          bottom: 25,
          marginRight: 160,
        }}
      >
        Password ?
      </Text>

        <View style={{marginRight:65,marginBottom:40,bottom:12}} >
        <Text  style={{fontSize:13}}>
        Don't worry! it happens.Please enter the
      </Text>
      <Text style={{fontSize:13}} >
        address associated with you account.
      </Text>
        </View>



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
            placeholder="Email iD / Mobile number"
            style={{ flex: 1, paddingVertical: 0 }}
            keyboardType="email-address"
          />
        </View>
      </View>
      <CustombuttonForgot text="Continue" onPress={OTP} />
    </View>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  logo: {
    width: 330,
    height: 220,
    marginBottom: 50,
    top:10
  },
  root: {
    alignItems: "center",
    backgroundColor: "#fff",
    paddingBottom:40
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
