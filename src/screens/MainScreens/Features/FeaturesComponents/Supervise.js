import React, { useState } from "react";
import { Image, Text, View, StyleSheet } from "react-native";
import Ribbon from "../../../../assets/icons/Ribbon";
import Television from "../../../../assets/icons/Television";
import CustomButton from "../../../../components/CustomButton";
import { BackgroundImage } from "react-native-elements/dist/config";
import { Sizes } from "../../../../helpers/sizes";
import { color1, color5 } from "../../../../helpers/colors";

const Supervise = (props) => {
  const [supervise_height, setSuperviseHeight] = useState(291);
  const [visible, setVisible] = useState(false)

  function handleShowLess(){
  }
  return (
    <View style={[styles.supervise_item, {height: supervise_height}]}>
      <View style={styles.ribbon_box}>
        <Ribbon />
        <Text style={styles.available_title}>Available Now!</Text>
      </View>
      <View style={styles.supervise_item_wrapper}>
        <View style={{ width: "50%" }}>
          <View>
            <Television />
          </View>
          <View>
            <Text style={styles.supervise_title}>
              Supervise
            </Text>
            <Text style={styles.supervise_description}>
              Watch your kids activities{"\n"}
              on your device in realtime
            </Text>
            <View style={styles.button_box}>
              <CustomButton
                fontSize={13}
                fontWeight={'bold'}
                borderRadius={25}
                title={"Show more"}
                onPress={handleShowLess}
              />
            </View>
          </View>
        </View>
        <View style={styles.supervise_images}>
          <BackgroundImage resizeMode={"contain"} source={require('../../../../assets/images/Ellipse000.png')}>
            <View style={{paddingHorizontal: 25}}>
              <Image style={styles.supervise_image} source={require('../../../../assets/images/Frame4451.png')}/>
            </View>
          </BackgroundImage>
        </View>
      </View>

    </View>
  );
};

export default Supervise;

const styles = StyleSheet.create({
  supervise_item: {

    backgroundColor: "#FFFCF6",
    borderRadius: 10,
    width: "100%",
  },
  ribbon_box: {
    alignSelf: "flex-end",
    marginTop: Sizes.size19,
    position: "relative",
  },
  available_title: {
    position: "absolute",
    fontSize: 10,
    color: "white",
    fontWeight: "bold",
    alignSelf: "center",
    top: 3,
  },
  supervise_item_wrapper: {
    paddingHorizontal: 24,
    width: "100%",
    flexDirection: "row"

  },
  supervise_title: {
    color: color5,
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: Sizes.size16,
  },
  supervise_description: {
    color: color1,
  },
  button_box: {
    width: 104,
    marginTop: 35,
  },
  supervise_images:{
    width: '50%',
    alignSelf: 'flex-end',
    justifyContent: "flex-end",
    right: -25,
    top: 41,
  },
  supervise_image:{
    top: -30,
  }
})
