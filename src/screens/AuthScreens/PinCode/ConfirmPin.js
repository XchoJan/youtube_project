import React, { useState } from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";
import GlobalContainer from "../../../components/GlobalContainer";
import PinCodeInput from "react-native-pincode-input";
import { color1, color2 } from "../../../helpers/colors";
import Preview from "../../../assets/icons/Preview";
import CustomButton from "../../../components/CustomButton";
import { Sizes } from "../../../helpers/sizes";
import MySitterLogo from "../../../assets/icons/MySitterLogo";

const ConfirmPin = (props) => {
  const [pinCode, setPinCode] = useState("");

  return (
    <GlobalContainer>
      <View style={{ flex: 1 }}>
        <View style={styles.title_box}>
          <Text style={styles.title}>
            Pin Code
          </Text>
          <Text style={styles.description}>
            Confirm your PIN
          </Text>
        </View>
        <View style={styles.pin_box}>
          <PinCodeInput
            length={4}
            pin={pinCode}
            onTextChange={(setPinCode)}
            circleEmptyStyle={{
              borderWidth: 1,
              borderColor: color2,
              width: 40,
              height: 40,
              borderRadius: 10,
            }}
            circleFilledStyle={{
              backgroundColor: color2,
              borderWidth: 1,
              borderColor: color2,
            }}
          />
        </View>
        <View style={styles.preview_box}>
          <Text style={styles.preview_icon}>
            <Preview />
          </Text>
          <Text style={styles.preview_title}>
            Preview
          </Text>
        </View>
      </View>
      <View style={{ width: "100%" }}>
        <Pressable onPress={() => {
          props.navigation.navigate("PinCode");
        }}>
          <Text style={styles.go_back}>
            Go Back
          </Text>
        </Pressable>
        <CustomButton onPress={() => {
          props.navigation.navigate("ConfirmPin");
        }} title={"Next"} />
      </View>
    </GlobalContainer>
  );
};

export default ConfirmPin;

const styles = StyleSheet.create({
  title_box: {
    alignItems: "center",
    paddingTop: Sizes.size112,
  },
  title: {
    fontSize: 24,
    color: color1,
    fontWeight: "bold",
    paddingBottom: Sizes.size10,
  },
  description: {
    color: color1,
    marginTop: Sizes.size10,
  },
  pin_box: {},
  pin_item: {
    borderWidth: 2,
    borderColor: color2,
    borderRadius: 10,
    marginHorizontal: 10,
    width: 40,
    height: 40,
    backgroundColor: "#FFF6E6",
    color: color1,
  },
  preview_box: {
    flexDirection: "row",
    justifyContent: "center",
  },
  preview_icon: {
    top: 3,
    marginRight: Sizes.size6,
  },
  preview_title: {
    color: color1,
    textAlign: "center",
  },
  go_back: {
    color: color2,
    fontSize: 16,
    textAlign: "center",
    marginBottom: Sizes.size20,
  },
});

