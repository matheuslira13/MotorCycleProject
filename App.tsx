import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "./src/screens/Login/Login_screen";
import Home from "./src/screens/Home/Home_screen";
import SelectedMotorcycle from "./src/screens/SelectedMotorcycle/SelectedMotorcycle_screen";
import DetailsMotorcycle from "./src/screens/DetailsMotorcycle/DetailsMotorcycle_screen";
import HelpUsFullNameMotor from "./src/screens/HelpUsFullNameMotor/HelpUsFullNameMotor_screen";
import HelpUsPiece from "./src/screens/HelpUsPiece/HelpUsPiece_screen";
import HelpUsTip from "./src/screens/HelpUsTip/HelpUsTip_screen";
import Routes from "./src/routes/routes";

const { Navigator, Screen } = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Navigator
        initialRouteName={Routes.Login}
        screenOptions={{ headerShown: false }}
      >
        <Screen
          initialParams={{}}
          name={Routes.Login}
          component={LoginScreen}
        />
        <Screen initialParams={{}} name={Routes.Home} component={Home} />
        <Screen
          initialParams={{}}
          name={Routes.SelectedMotorcycle}
          component={SelectedMotorcycle}
        />
        <Screen
          initialParams={{}}
          name={Routes.DetailsMotorcycle}
          component={DetailsMotorcycle}
        />
        <Screen
          initialParams={{}}
          name={Routes.HelpUsFullNameMotor}
          component={HelpUsFullNameMotor}
        />
        <Screen
          initialParams={{}}
          name={Routes.HelpUsPiece}
          component={HelpUsPiece}
        />
        <Screen
          initialParams={{}}
          name={Routes.HelpUsTip}
          component={HelpUsTip}
        />
      </Navigator>
    </NavigationContainer>
  );
}
