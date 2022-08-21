import React from "react";
import { Text, View, StyleSheet } from "react-native";
import GlobalContainer from "../../../../components/GlobalContainer";
import Icon1 from "../../../../assets/icons/UpcomingFeatures/Icon1";
import Icon2 from "../../../../assets/icons/UpcomingFeatures/Icon2";
import { color2, color5 } from "../../../../helpers/colors";
import Icon3 from "../../../../assets/icons/UpcomingFeatures/Icon3";
import Icon4 from "../../../../assets/icons/UpcomingFeatures/Icon4";
import Icon5 from "../../../../assets/icons/UpcomingFeatures/Icon5";
import Icon6 from "../../../../assets/icons/UpcomingFeatures/Icon6";
import Icon7 from "../../../../assets/icons/UpcomingFeatures/Icon7";
import Icon8 from "../../../../assets/icons/UpcomingFeatures/Icon8";

const UpcomingFeatures = (props) => {
  return (
    <GlobalContainer>
        <View style={styles.top_line}>
          <View style={{bottom: 15}}>
            <Icon1 />
          </View>
          <View>
            <Icon2 />
          </View>
          <View>
            <Text style={styles.our_text}>Our</Text>
          </View>
          <View style={{bottom: 15}}>
            <Icon3 />
          </View>
          <View>
            <Icon4 />
          </View>
          <View>
            <Icon5 />
          </View>
        </View>
        <View>
          <Text style={styles.upcoming_text}>Upcoming Features</Text>
        </View>
        <View style={styles.top_line}>
          <View style={{bottom: 15}}>
            <Icon6 />
          </View>
          <View style={{ right: 60 }}>
            <Icon7 />
          </View>
          <View>
            <Icon8 />
          </View>
        </View>
    </GlobalContainer>
  );
};

export default UpcomingFeatures;

const styles = StyleSheet.create({
  top_line: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginTop: 28,

  },
  our_text: {
    fontSize: 24,
    color: color5,
    fontWeight: "bold",
    left: 20
  },
  upcoming_text: {
    textAlign: "center",
    color: color2,
    fontSize: 26,
    fontWeight: "bold",
  },
});
