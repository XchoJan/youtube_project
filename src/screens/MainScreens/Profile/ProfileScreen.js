import React from "react";
import { Text, View, StyleSheet, Pressable, TouchableOpacity, ImageBackground } from "react-native";
import MainHeader from "../../../components/MainHeader";
import LogOut from "../../../assets/icons/LogOut";
import GlobalContainer from "../../../components/GlobalContainer";
import { color1, color2, color4, color5 } from "../../../helpers/colors";
import Lock from "../../../assets/icons/ProfileIcons/Lock";
import Star from "../../../assets/icons/ProfileIcons/Star";
import Phone from "../../../assets/icons/ProfileIcons/Phone";
import ResetPin from "../../../assets/icons/ProfileIcons/ResetPin";
import ArrowRight from "../../../assets/icons/ProfileIcons/ArrowRight";
import { Sizes } from "../../../helpers/sizes";
import FeedBackBear from "../../../assets/icons/Bears/FeedBackBear";
import {useDispatch} from "react-redux";

const ProfileScreen = (props) => {
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <View>
        <MainHeader
          page_title={"Profile"}
          button
          title={"Logout"}
          button_icon={<LogOut />}
          user_name={"Aman129dasd45465465@gmail.ru"}
          onPress={()=>{dispatch({type: 'IS_LOGGED', payload: false})}}
        />
      </View>
      <GlobalContainer>
        <View style={{ flex: 1 }}>
          <Pressable style={styles.settings_item}>
            <View style={{ flexDirection: "row" }}>
              <View style={styles.settings_item_icon}>
                <ResetPin />
              </View>
              <Text style={styles.settings_item_title}>
                Reset pin
              </Text>
            </View>
            <View style={styles.arrow}>
              <ArrowRight />
            </View>
          </Pressable>

          <Pressable style={styles.settings_item}>
            <View style={{ flexDirection: "row" }}>
              <View style={styles.settings_item_icon}>
                <Phone />
              </View>
              <Text style={styles.settings_item_title}>
                Contact us
              </Text>
            </View>
            <View style={styles.arrow}>
              <ArrowRight />
            </View>
          </Pressable>
          <Pressable style={styles.settings_item}>
            <View style={{ flexDirection: "row" }}>
              <View style={styles.settings_item_icon}>
                <Star />
              </View>
              <Text style={styles.settings_item_title}>
                Rate us
              </Text>
            </View>
            <View style={styles.arrow}>
              <ArrowRight />
            </View>
          </Pressable>
        </View>
        <View style={styles.feedback_container}>
          <View>
            <Text style={styles.feedback_title}>Give Feedback ?</Text>
          </View>
          <View style={styles.feedback_row_content}>
            <View>
              <View>
                <Text style={styles.feedback_description}>
                  Help us to know your{"\n"}
                  opinion by completing{"\n"}
                  this questionnaire.
                </Text>
              </View>
              <View style={styles.feedback_button_container}>
                <TouchableOpacity
                  onPress={() => {props.navigation.navigate("Feedback");}}
                  style={styles.feedback_button}>
                  <Text style={styles.feedback_button_title}>
                    Start
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{ right: 5, top: 20 }}>
              <ImageBackground
                resizeMode={"cover"}
                style={{}}
                source={require("../../../assets/images/FeedbackBgc.png")}>
                <FeedBackBear />
              </ImageBackground>
            </View>
          </View>
        </View>
      </GlobalContainer>
    </View>
  );
};

export default ProfileScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  settings_item_icon: {
    backgroundColor: "#FFE7B9",
    width: 40,
    height: 40,
    borderRadius: 10,
    alignItems: "center",
    paddingTop: 8,
  },
  settings_item: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: Sizes.size20,
  },
  settings_icon: {
    left: 5,
  },
  settings_item_title: {
    color: color5,
    fontSize: 20,
    marginLeft: Sizes.size10,
    marginTop: 5,
  },
  arrow: {
    marginTop: 10,
  },
  feedback_container: {
    position: "relative",
    height: 250,
    backgroundColor: color5,
    borderRadius: 10,
    paddingTop: Sizes.size40,
    paddingLeft: Sizes.size15,
  },
  feedback_title: {
    fontSize: 28,
    color: "#fff",
    fontWeight: "bold",
  },
  feedback_row_content: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  feedback_description: {
    fontSize: 14,
    color: color4,
  },
  feedback_button_container: {
    marginTop: Sizes.size16,
  },
  feedback_button: {
    borderWidth: 1,
    borderColor: color2,
    borderRadius: 10,
    width: 65,
    height: 40,
    alignItems: "center",
    paddingTop: 8,
  },
  feedback_button_title: {
    color: color2,
    fontWeight: "bold",
  },
});
