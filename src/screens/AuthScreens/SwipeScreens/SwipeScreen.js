import React from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import { Sizes } from "../../../helpers/sizes";
import { color1, color2 } from "../../../helpers/colors";
import CustomButton from "../../../components/CustomButton";


const SwipeScreen = (props) => {
  const slides = [
    {
      id: 1,
      title: "Supervise",
      description: "Supervise your kid’s mobile usage",
      image: require("../../../assets/images/Supervise.png"),
      backgroundColor: "#59b2ab",
    },
    {
      id: 2,
      title: "Scheduling",
      description: "Set time limit on specific apps",
      image: require("../../../assets/images/SCHEDULING.png"),
      backgroundColor: "yellow",
    },
    {
      id: 3,
      title: "Geo fencing",
      description: "Keep track of your kid’s location",
      image: require("../../../assets/images/Geofencig.png"),
      backgroundColor: "red",
      button: "Proceed",
    },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.container}>
      <View style={styles.min_wrapper}>
        <View>
          <View>
            <Text style={styles.title}>{item.title}</Text>
          </View>
          <View>
            <Image source={item.image} style={styles.image} />
          </View>
          <View>
            <Text style={styles.description}>{item.description}</Text>
          </View>
        </View>
      </View>
      <View style={styles.child}>
      {item.button ?
        <CustomButton title={item.button}
                      onPress={() => {
                        props.navigation.navigate("CreateAccount");
                      }}
        /> : <View style={{ height: 50 }} />}
      </View>
    </View>
  );

  return (
    <AppIntroSlider
      showNextButton={false}
      showDoneButton={false}
      dotStyle={{ backgroundColor: "#092E49", width: 14,  marginBottom: '45%'}}
      activeDotStyle={{backgroundColor: color2, width: 37, marginBottom: '45%'}}
      data={slides}
      renderItem={renderItem}
    />
  );
};

export default SwipeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: Sizes.size16,
    alignItems: "center",
    paddingVertical: 10,
  },
  min_wrapper: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    color: color1,
    fontSize: 28,
    textAlign: "center",
    fontWeight: "bold",
  },
  image: {
    height: 375,
    width: 375,
  },
  description: {
    textAlign: "center",
    fontSize: 14,
    marginBottom: Sizes.size30,
    color: color1,
  },
  slider_icon: {
    alignItems: "center",
  },
  child: {
    width: "100%",
    marginBottom: Sizes.size24,
  },
});
