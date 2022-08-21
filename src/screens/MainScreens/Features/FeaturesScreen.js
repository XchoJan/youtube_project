import React from "react";
import { Text, View, StyleSheet, ScrollView, Image } from "react-native";
import GlobalContainer from "../../../components/GlobalContainer";
import MainHeader from "../../../components/MainHeader";
import Supervise from "./FeaturesComponents/Supervise";
import UpcomingFeatures from "./FeaturesComponents/UpcomingFeatures";

const FeaturesScreen = (props) => {
  return (
    <ScrollView style={{backgroundColor: '#fff'}}>
      <GlobalContainer>
        <View>
          <MainHeader page_title={"Key Features"} />
        </View>
        <View style={styles.content_box}>
          <View>
            <Supervise />
          </View>
          <View style={styles.upcoming_view}>
            <UpcomingFeatures/>
          </View>
        </View>
      </GlobalContainer>
    </ScrollView>

  );
};

export default FeaturesScreen;

const styles = StyleSheet.create({
  content_box: {
    marginTop: 40,
  },
  upcoming_view:{
    marginTop: 50,
    marginBottom: 25,
  }

});
