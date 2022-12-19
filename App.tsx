import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import {
  DetailsMotorcycleScreen,
  HelpUsFullNameMotorScreen,
  HelpUsPieceScreen,
  HelpUsTipScreen,
  HomeScreen,
  LoginScreen,
  SelectedMotorcycleScreen,
} from './src/screens/'

import Routes from './src/routes/routes'

const { Navigator, Screen } = createNativeStackNavigator()
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
        <Screen initialParams={{}} name={Routes.Home} component={HomeScreen} />

        <Screen
          initialParams={{}}
          name={Routes.SelectedMotorcycle}
          component={SelectedMotorcycleScreen}
        />
        <Screen
          initialParams={{}}
          name={Routes.DetailsMotorcycle}
          component={DetailsMotorcycleScreen}
        />

        <Screen
          initialParams={{}}
          name={Routes.HelpUsFullNameMotor}
          component={HelpUsFullNameMotorScreen}
        />
        <Screen
          initialParams={{}}
          name={Routes.HelpUsPiece}
          component={HelpUsPieceScreen}
        />
        <Screen
          initialParams={{}}
          name={Routes.HelpUsTip}
          component={HelpUsTipScreen}
        />
      </Navigator>
    </NavigationContainer>
  )
}
