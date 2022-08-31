import React from "react";
import { Text, TouchableOpacity, StyleSheet, View } from "react-native";
import { color2 } from "src/helpers/colors";
import Google from "src/assets/icons/Google";

const CustomButton = (props) => {
  console.log(props, 11111)
  const {backgroundColor, color, borderRadius, buttonStyle, borderColor, height, fontSize, fontWeight, title, google, disabled, onPress} = props
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[styles.button, buttonStyle,
        // {
        //   backgroundColor: backgroundColor ? backgroundColor : color2,
        //   height: height ? height : 50,
        //   borderRadius: borderRadius ? borderRadius : 15,
        //   borderColor: borderColor ? borderColor : color2,
        //   borderWidth: 1
        // }
        ]
      }>
      <View style={{ flexDirection: "row" }}>
        <Text style={styles.icon_box}>
          {google ? <Google /> : null}
        </Text>
        <Text style={[styles.title, {
          fontWeight: fontWeight, fontSize: fontSize ? fontSize : 17,
          color: color ? color : 'white'
        }]}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",

    backgroundColor:  color2,
    height:  50,
    borderRadius:  15,
    borderColor:  color2,
    borderWidth: 1
  },
  title: {
    color: "#fff",
    fontSize: 17,
  },
  icon_box: {
    marginRight: 10,
  },
});
