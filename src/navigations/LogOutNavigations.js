import * as React from 'react';
const Stack = createStackNavigator();
import { createStackNavigator } from "@react-navigation/stack";

import {
  PinCode,
  ConfirmPin,
  SwipeScreen,
  EnterKidScreen,
  PermissionsScreen,
  CreateAccountScreen
} from "screens";


function CreateAccount({ navigation }) {
  return <CreateAccountScreen navigation={navigation} />
}
function SwipeScreens({ navigation }) {
  return <SwipeScreen navigation={navigation} />;
}
function EnterKid({ navigation }) {
  return <EnterKidScreen navigation={navigation} />;
}

function Permissions({ navigation }) {
  return <PermissionsScreen navigation={navigation} />;
}
function PinCodeScreen({ navigation }) {
  return <PinCode navigation={navigation} />;
}

function ConfirmPinScreen({ navigation, route }) {
  const {pinCode} = route.params
  return <ConfirmPin pinCode={pinCode} navigation={navigation} />;
}

export default function LogOutNavigations() {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="SwipeScreen" component={SwipeScreens} />

      <Stack.Screen name="CreateAccount" component={CreateAccount} />

      <Stack.Screen name="EnterKid" component={EnterKid} />

      <Stack.Screen name="Permissions" component={Permissions} />

      <Stack.Screen name="PinCode" component={PinCodeScreen} />

      <Stack.Screen name="ConfirmPin" component={ConfirmPinScreen} />
    </Stack.Navigator>

  );
}

