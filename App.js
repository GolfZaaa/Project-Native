import { FlatList, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import "react-native-gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import DrawerScreens from "./navigation/drawer/DrawerScreens";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import LoginScreen from "./src/screens/LoginScreen";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";
import CartScreen from "./src/screens/CartScreen";
import RegisterScreen from "./src/screens/RegisterScreen";
import ForgotPasswordScreen from "./src/screens/ForgotPasswordScreen";
import OTPScreen from "./src/screens/OTPScreen";
import OnboardScreen from "./src/screens/OnboardScreen";

import ProductDetailScreen from "./src/screens/ProductDetailScreen";
import BottomSheet from "./src/screens/product/BottomSheet";
import Toast from "./src/component/ToastError";
import ProductTest from "./src/screens/ProductTest";
import ModalScreen from "./src/screens/ModalScreen";
import Profile from "./navigation/Profile";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <SafeAreaView style={style.root}>
          <Stack.Navigator
            initialRouteName="Onboard"
            screenOptions={{
              headerShown: false,
              gestureEnabled:false,
            }}
          >
            <Stack.Screen name="Cart" component={CartScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
            <Stack.Screen name="OTP" component={OTPScreen} />
            <Stack.Screen name="Onboard" component={OnboardScreen} />
            <Stack.Screen name="Drawer" component={DrawerScreens} />
            <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
            <Stack.Screen name="Bottom" component={BottomSheet} />
            <Stack.Screen name="Toasts" component={Toast} />
            <Stack.Screen name="ProductT" component={ProductTest} />
            <Stack.Screen name="Modal" component={ModalScreen} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen
              name="ForgotPassword"
              component={ForgotPasswordScreen}
            />
          </Stack.Navigator>
          {/* <DrawerScreens /> */}

          {/* <LoginScreen /> */}
        </SafeAreaView>
      </NavigationContainer>
    </ThemeProvider>
  );
}

const style = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#f9fbfc",
  },
});
