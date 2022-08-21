import * as React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import LogOutNavigations from "./src/navigations/LogOutNavigations";
import Main from "./src/navigations/MainNavigations";
//import AsyncStorage from "@react-native-async-storage/async-storage";
//import Main from "./src/navigations/Main";
//import { store } from './src/store/index'
//import {Provider} from 'react-redux'
// import store from './store'

const App = () => {
  const isLogged = false
  return (
      <NavigationContainer>
        {isLogged ? <LogOutNavigations /> : <Main/> }
      </NavigationContainer>
  );
};

export default App;


