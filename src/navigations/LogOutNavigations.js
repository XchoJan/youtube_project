import * as React from 'react';
const Stack = createStackNavigator();
import { createStackNavigator } from "@react-navigation/stack";

import CreateAccountComponent from "../screens/AuthScreens/CreateAccount/CreateAccountScreen";
import SwipeScreenComponent from "../screens/AuthScreens/SwipeScreens/SwipeScreen";
import EnterKidComponent from "../screens/AuthScreens/EnterKid/EnterKidScreen";
import PermissionsComponent from "../screens/AuthScreens/Permissions/PermissionsScreen";
import PinCodeComponent from "../screens/AuthScreens/PinCode/PinCode";
import ConfirmPinComponent from "../screens/AuthScreens/PinCode/ConfirmPin";

function CreateAccountScreen({ navigation }) {
  return <CreateAccountComponent navigation={navigation} />;
}
function SwipeScreens({ navigation }) {
  return <SwipeScreenComponent navigation={navigation} />;
}
function EnterKidScreen({ navigation }) {
  return <EnterKidComponent navigation={navigation} />;
}

function PermissionsScreen({ navigation }) {
  return <PermissionsComponent navigation={navigation} />;
}
function PinCodeScreen({ navigation }) {
  return <PinCodeComponent navigation={navigation} />;
}

function ConfirmPinScreen({ navigation, route }) {
  const {pinCode} = route.params
  return <ConfirmPinComponent pinCode={pinCode} navigation={navigation} />;
}

export default function LogOutNavigations() {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="SwipeScreen" component={SwipeScreens} />

      <Stack.Screen name="CreateAccount" component={CreateAccountScreen} />

      <Stack.Screen name="EnterKid" component={EnterKidScreen} />

      <Stack.Screen name="Permissions" component={PermissionsScreen} />

      <Stack.Screen name="PinCode" component={PinCodeScreen} />

      <Stack.Screen name="ConfirmPin" component={ConfirmPinScreen} />
    </Stack.Navigator>

  );
}

