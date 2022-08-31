import React from "react";
import SignInContainer from "src/components/SignInContainer";
import CustomButton from "src/components/CustomButton";
import { Image, Text, View, StyleSheet } from "react-native";
import { Sizes } from "src/helpers/sizes";
import { color1 } from "src/helpers/colors";

const CreateAccountScreen = (props) => {
  return (
    <SignInContainer title={"Create account"}>
      <View style={{flex: 1}}>
        <View style={{flex: 1}}>
          <View style={styles.image_box}>
            <Image source={require("../../../assets/images/Icontest.png")} style={[styles.image]} />
          </View>
          <View>
            <Text style={styles.description}>Stay updated with all upcoming features {"\n"} and sync your profile across
              multiple{"\n"} devices</Text>
          </View>
        </View>

        <View>
          <CustomButton
            google
            buttonStyle={{
              backgroundColor: '#4684F4',
              title: 'red',
              borderColor:'transparent'
            }}
            title={"Sign up / Log in"}
            onPress={() => {
              props.navigation.navigate("EnterKid");
            }}
          />
        </View>
      </View>
    </SignInContainer>
  );
};
export default CreateAccountScreen;

const styles = StyleSheet.create({
  image_box: {
    alignItems: "center",
    marginVertical: Sizes.size32
  },
  image: {
    width: 160,
    height: 178,
  },
  description: {
    textAlign: "center",
    fontSize: 14,
    marginBottom: Sizes.size30,
    color: color1,
  },

});
