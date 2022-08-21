import React from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import MySitterLogo from "../assets/icons/MySitterLogo";
import { color2, color5 } from "../helpers/colors";
import { Sizes } from "../helpers/sizes";

const MainHeader = (props) => {
  const { children, title, button, app_logo, page_title, user_name, button_icon } = props;
  return (
    <View style={styles.header_container}>
      <View>
        {app_logo ? <MySitterLogo /> : <Text style={styles.page_title}>{page_title}</Text>}
      </View>
      <View style={{flexDirection: 'row'}}>
        <View style={styles.user_name_box}>
          <Text numberOfLines={1} style={styles.user_name}>
            {user_name}
          </Text>
        </View>
        {button && <TouchableOpacity style={styles.button}>
          <Text style={styles.button_title}>
            {button_icon} {title}
          </Text>
        </TouchableOpacity>}
      </View>
    </View>
  );
};

export default MainHeader;

const styles = StyleSheet.create({
  header_container: {
    flexDirection: "row",
    marginVertical: Sizes.size10,
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: Sizes.size16,
  },
  button: {
    backgroundColor: color2,
    width: 97,
    height: 45,
    borderRadius: 20,
  },
  page_title: {
    fontSize: 26,
    color: color5,
    fontWeight: "bold",
  },
  button_title: {
    alignItems: "center",
    color: "#fff",
    textAlign: "center",
    marginTop: 10,
    fontWeight: "bold",
    fontSize: 16
  },
  user_name:{
    color: color5,
    width: 120,
    alignSelf: "flex-end",
    fontWeight: "bold",
    marginTop: 10
  },
  user_name_box:{
    marginRight: 5
  }
});
