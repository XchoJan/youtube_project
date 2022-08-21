import React from "react";
import { View, StyleSheet, Text, ScrollView, Image, Dimensions } from "react-native";
import MainHeader from "../../../components/MainHeader";
import { color1, color2, color3, color4, color5, color6 } from "../../../helpers/colors";
import { Sizes } from "../../../helpers/sizes";
import CustomButton from "../../../components/CustomButton";

const windowHeight = Dimensions.get('window').height;

const HomeScreen = (props) => {
  console.log(windowHeight);
  return (
    <ScrollView>
      <View>
        <MainHeader app_logo/>
      </View>
      <View style={styles.top_wrapper}>
        <View style={styles.title_box}>
          <Text style={styles.title}>Today’s <Text style={{ color: color2 }}>screen time</Text></Text>
        </View>
        <View style={styles.timer_titles}>
          <Text style={styles.hour_title}>Hour</Text>
          <Text style={styles.hour_title}>Min</Text>
        </View>
        <View style={styles.timer_box}>
          <Text style={styles.timer}>21:12</Text>
        </View>
      </View>
      <View style={styles.bottom_wrapper}>
        <View style={styles.coco}>
          <View>
            <Text style={styles.coco_description}>
              <Text style={styles.coco_title}>Coco</Text> <Text style={{ fontSize: 20, fontWeight: "bold" }}>is
              ready</Text> {"\n"}
              to monitor your kid’s{"\n"}
              screen time.
            </Text>
          </View>
          <View style={{ position: "relative" }}>
            <Image source={require("../../../assets/images/Group86.png")} />
          </View>
        </View>
      </View>
      <View style={{ marginBottom: 10}}>
        <View>
          <Text style={styles.enable_child_description}>Enable Child Mode before handing{"\n"}
            this device to your kid.</Text>
        </View>
        <View style={{paddingHorizontal: '25%',}}>
          <CustomButton
            height={61}
            borderRadius={34}
            title={"Enable Child Mode"} />
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  title_box: {
    alignItems: "center",
    paddingTop: Sizes.size80,
  },
  top_wrapper: {
    backgroundColor: color5,
    height: Sizes.size424,
  },
  title: {
    fontSize: 25,
    color: "#fff",
  },
  timer_titles: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingTop: Sizes.size24,
  },
  timer_box: {
    width: 154,
    height: 90,
    backgroundColor: "#71628B",
    borderRadius: 10,
    alignSelf: "center",
    marginTop: Sizes.size16,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 24,
  },
  timer: {
    top: 20,
    fontSize: 28,
    color: "#fff",
    fontWeight: "bold",
  },
  hour_title: {
    color: color6,
  },
  bottom_wrapper: {
    alignItems: "center",
    flex: 1
  },
  coco: {
    width: 343,
    height: 187,
    borderRadius: 40,
    backgroundColor: "#FFFCF6",
    paddingHorizontal: 16,
    flexDirection: "row",
    top: -100,
    justifyContent: "space-between",
    paddingTop: 20,

  },
  coco_description: {
    color: color1,
    marginTop: 40,
  },
  coco_title: {
    color: color2,
    fontSize: 22,
  },
  enable_child_description: {
    textAlign: "center",
    marginBottom: Sizes.size25,
    color: color1,
  },

});
