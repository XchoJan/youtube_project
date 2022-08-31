import React from "react";
import { color1 } from "src/helpers/colors";

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';


import HomeIcon from "src/assets/icons/TabBarIcons/HomeIcon";
import FeaturesIcon from "src/assets/icons/TabBarIcons/FeaturesIcon";
import ReportsIcon from "src/assets/icons/TabBarIcons/ReportsIcon";
import ProfileIcon from "src/assets/icons/TabBarIcons/ProfileIcon";

import {
    HomeScreen,
    ProfileScreen,
    ReportsScreen,
    FeedbackScreen,
    FeaturesScreen
} from "screens";

let Tab = createBottomTabNavigator();


function Home({navigation}) {
  return <HomeScreen navigation={navigation}/>
}
function Features({navigation}) {
  return <FeaturesScreen navigation={navigation}/>
}
function Reports({navigation}) {
  return <ReportsScreen navigation={navigation}/>
}
function Feedback({navigation}) {
  return <FeedbackScreen navigation={navigation}/>
}

function Profile({navigation}) {
  return <ProfileScreen navigation={navigation}/>;
}

export default function Main() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="Home" component={Home}
                  options={{tabBarIcon: ({focused}) => (<HomeIcon/>),
                    tabBarActiveTintColor: color1}}/>
      <Tab.Screen name="Reports" component={Reports}
                  options={{tabBarIcon: ({focused}) => (<ReportsIcon/>),
                    tabBarActiveTintColor: color1}}/>
      <Tab.Screen name="Features" component={Features}
                  options={{tabBarIcon: ({focused}) => (<FeaturesIcon/>),
                    tabBarActiveTintColor: color1}}/>

      <Tab.Screen name="Profile" component={Profile}
                  options={{tabBarIcon: ({focused}) => (<ProfileIcon/>),
                    tabBarActiveTintColor: color1}}/>

      <Tab.Screen name="Feedback" component={Feedback}
                  options={{
                    tabBarButton: () => null,
                    tabBarVisible: false,
                    tabBarStyle: { display: 'none' },
                  }}/>

    </Tab.Navigator>
  );
}
