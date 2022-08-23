import * as React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import LogOutNavigations from "./src/navigations/LogOutNavigations";
import Main from "./src/navigations/MainNavigations";
import {useSelector} from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { store } from './src/store/index'
import {Provider} from 'react-redux'

const AppWrapper = () => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    );
};

const App = () => {
    let isLogined = useSelector((store) => store.is_logged.is_logged);

    return (
      <NavigationContainer>
        {!isLogined ? <LogOutNavigations /> : <Main/> }
      </NavigationContainer>
  );
};

export default AppWrapper;


