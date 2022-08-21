import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import GlobalContainer from "../../../components/GlobalContainer";
import BearRightHand from "../../../assets/icons/Bears/BearRightHand";
import Bear1 from "../../../assets/icons/Bears/Bear1";
import BearLeftHand from "../../../assets/icons/Bears/BearLeftHand";
import { Sizes } from "../../../helpers/sizes";
import Permissions from "../../../assets/icons/Permissions";
import { color1 } from "../../../helpers/colors";
import CustomButton from "../../../components/CustomButton";

const PermissionsScreen = (props) => {

  return (
    <View style={styles.wrapper}>
      <View style={styles.header_icons}>
        <View style={styles.bear_head}>
          <Bear1 />
        </View>
      </View>

      <View style={styles.bottom_content}>
        <GlobalContainer>
          <View style={styles.bear_hands}>
            <View style={styles.bear_right_hand}>
              <BearRightHand />
            </View>
            <View style={styles.bear_left_hand}>
              <BearLeftHand />
            </View>
          </View>
          <View style={styles.content}>
            <View>
              <Permissions />
            </View>
            <View style={styles.title_box}>
              <Text style={styles.title}>
                Permissions
              </Text>
            </View>
            <View style={styles.description_box}>
              <Text style={styles.description}>
                Paas needs to be turned to ‘ON’ in the {"\n"} uses access menu in order to track{"\n"} which apps are
                used & for how long.
              </Text>
              <Text style={styles.description_helper}>
                Click Allow -> Find and Click on “Paas” -> Enable
              </Text>
              <Text style={styles.description_helper}>
                Once done, click on the back button to{"\n"} return to Paas.
              </Text>
            </View>
          </View>
        </GlobalContainer>
        <View style={styles.button_box}>
          <CustomButton
            onPress={() => {
              props.navigation.navigate("PinCode");
            }}
            title={"Allow"} />
        </View>
      </View>
    </View>

  );
};

export default PermissionsScreen;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#2E104F",
    flex: 1
  },
  header_icons: {
    flexDirection: "row",
    marginTop: Sizes.size22,
    justifyContent: "center",
  },
  bottom_content: {
    flex: 1,
    width: '100%',
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  },
  bear_head: {
    top: 25,
  },
  bear_hands: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    top: -40,
  },
  bear_right_hand: {
    left: 5,
  },
  bear_left_hand: {
    left: "10%",
  },
  content: {
    top: -27,
    alignItems: "center",
  },
  title_box: {
    marginTop: Sizes.size16,
  },
  title: {
    color: color1,
    fontSize: 26,
    fontWeight: "bold",
  },
  button_box:{
    paddingHorizontal: 16,
    marginBottom: 44,
    width: '100%'
  },
  description_box: {
    marginTop: Sizes.size24,
  },
  description: {
    color: color1,
    textAlign: "center",
  },
  description_helper: {
    marginTop: Sizes.size32,
    color: "#512D6D",
    fontWeight: "bold",
    textAlign: "center",
  },
});
