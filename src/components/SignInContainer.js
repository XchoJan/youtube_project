import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { color1, color2 } from "../helpers/colors";
import { Sizes } from "../helpers/sizes";
import Slide1 from "../assets/icons/Slide1";


const SignInContainer = (props) => {
  const { children, title} = props;
  return (
    <View style={styles.container}>
      <View style={styles.min_wrapper}>
            <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.child}>
        {children}
      </View>
    </View>
  );
};

export default SignInContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: Sizes.size16,
    alignItems: "center",
    paddingBottom: 10,
    paddingTop: Sizes.size112
  },
  min_wrapper: {
    justifyContent: "center",
  },
  title: {
    color: color1,
    fontSize: 28,
    textAlign: "center",
    fontWeight: "bold",
    paddingBottom: Sizes.size32
  },
  child: {
    width: "100%",
    marginBottom: Sizes.size24,
    flex: 1
  },
});
