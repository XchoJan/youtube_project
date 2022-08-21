import React from "react";
import { View, StyleSheet } from "react-native";
import { Sizes } from "../helpers/sizes";

const GlobalContainer = (props) => {
  const {children} = props
  return (
    <View style={styles.container}>
      {children}
    </View>
  );
};

export default GlobalContainer;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    paddingHorizontal: Sizes.size16,
    width: '100%',
    marginBottom: 20
  }
})
