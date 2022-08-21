import React from "react";
import { color1 } from "../helpers/colors";

import {createStackNavigator} from "@react-navigation/stack";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';


import HomeIcon from "../assets/icons/TabBarIcons/HomeIcon";
import FeaturesIcon from "../assets/icons/TabBarIcons/FeaturesIcon";
import ReportsIcon from "../assets/icons/TabBarIcons/ReportsIcon";
import ProfileIcon from "../assets/icons/TabBarIcons/ProfileIcon";

import HomeComponent from "../screens/MainScreens/Home/HomeScreen";
import FeaturesComponent from "../screens/MainScreens/Features/FeaturesScreen";
import ReportsComponent from "../screens/MainScreens/Reports/ReportsScreen";
import ProfileComponent from "../screens/MainScreens/Profile/ProfileScreen";
import FeedbackComponent from "../screens/MainScreens/Feedback/FeedbackScreen";


const Tab = createBottomTabNavigator();


function HomeScreen({navigation}) {
  return <HomeComponent navigation={navigation}/>;
}

function FeaturesScreen({navigation}) {
  return <FeaturesComponent navigation={navigation}/>;
}
function ReportsScreen({navigation}) {
  return <ReportsComponent navigation={navigation}/>;
}
function FeedbackScreen({navigation}) {
  return <FeedbackComponent navigation={navigation}/>;
}

function ProfileScreen({navigation}) {
  return <ProfileComponent navigation={navigation}/>;
}

export default function Main() {
  return (
    <Tab.Navigator
      initialRouteName="Patients"
      screenOptions={{
        headerShown: false,
      }}>

      <Tab.Screen name="Home" component={HomeScreen}
                  options={{tabBarIcon: ({focused}) => (<HomeIcon/>),
                    tabBarActiveTintColor: color1}}/>
      <Tab.Screen name="Reports" component={ReportsScreen}
                  options={{tabBarIcon: ({focused}) => (<ReportsIcon/>),
                    tabBarActiveTintColor: color1}}/>
      <Tab.Screen name="Features" component={FeaturesScreen}
                  options={{tabBarIcon: ({focused}) => (<FeaturesIcon/>),
                    tabBarActiveTintColor: color1}}/>

      <Tab.Screen name="Profile" component={ProfileScreen}
                  options={{tabBarIcon: ({focused}) => (<ProfileIcon/>),
                    tabBarActiveTintColor: color1}}/>

      <Tab.Screen name="Feedback" component={FeedbackScreen}
                  options={{
                    tabBarButton: () => null,
                    tabBarVisible: false,
                    tabBarStyle: { display: 'none' },
                  }}/>

    </Tab.Navigator>
  );
}
