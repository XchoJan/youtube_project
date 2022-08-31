import React from "react";
import { Text, StyleSheet, View, ScrollView } from "react-native";
import MainHeader from "src/components/MainHeader";
import { color1, color2, color5 } from "src/helpers/colors";
import GlobalContainer from "src/components/GlobalContainer";
import { Sizes } from "src/helpers/sizes";
import ArrowRight from "src/assets/icons/ArrowRight";
import CustomButton from "src/components/CustomButton";

const ReportsScreen = (props) => {

  return (
    <ScrollView>
      <View>
        <MainHeader button_arrow page_title={"Reports"} button title={"Daily"} />
      </View>
      <View style={styles.calendar_box}>
        <Text style={styles.calendar_items}>Today, 17 Feb, 2022</Text>
      </View>
      <GlobalContainer>
        <View style={styles.screen_time_box}>
          <Text style={styles.screen_time_title}>
            Screen time
          </Text>
        </View>
        <View style={styles.chart_container}>

          {/*charty stex*/}

        </View>
        <View style={styles.application_used_container}>
          <View style={styles.category_titles}>
            <View>
              <Text style={styles.application_used_title}>
                Applications used
              </Text>
            </View>
            <View>
              <Text style={styles.show_category_title}>
                Show category
              </Text>
            </View>
          </View>
          <View style={styles.soc_links}>
            <View style={styles.soc_title_box}>
              <View style={{ flexDirection: "row" }}>
                <Text style={{ backgroundColor: "#C4C4C4", width: 30, height: 30, borderRadius: 10 }} />
                <Text style={styles.soc_title}>Youtube</Text>
              </View>
              <View style={styles.soc_timer}>
                <Text style={styles.timer}>
                  22m
                </Text>
                <Text style={styles.arrow}>
                  <ArrowRight />
                </Text>
              </View>
            </View>
            <Text style={styles.line} />

            <View style={styles.soc_title_box}>
              <View style={{ flexDirection: "row" }}>
                <Text style={{ backgroundColor: "#C4C4C4", width: 30, height: 30, borderRadius: 10 }} />
                <Text style={styles.soc_title}>Facebook</Text>
              </View>
              <View style={styles.soc_timer}>
                <Text style={styles.timer}>
                  22m
                </Text>
                <Text style={styles.arrow}>
                  <ArrowRight />
                </Text>
              </View>
            </View>
            <Text style={styles.line} />

            <View style={styles.soc_title_box}>
              <View style={{ flexDirection: "row" }}>
                <Text style={{ backgroundColor: "#C4C4C4", width: 30, height: 30, borderRadius: 10 }} />
                <Text style={styles.soc_title}>Netflix</Text>
              </View>
              <View style={styles.soc_timer}>
                <Text style={styles.timer}>
                  22m
                </Text>
                <Text style={styles.arrow}>
                  <ArrowRight />
                </Text>
              </View>
            </View>
            <Text style={styles.line} />
            <View style={styles.soc_title_box}>
              <View style={{ flexDirection: "row" }}>
                <Text style={{ backgroundColor: "#C4C4C4", width: 30, height: 30, borderRadius: 10 }} />
                <Text style={styles.soc_title}>Musician</Text>
              </View>
              <View style={styles.soc_timer}>
                <Text style={styles.timer}>
                  22m
                </Text>
                <Text style={styles.arrow}>
                  <ArrowRight />
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.experience_container}>
            <Text style={styles.experience_title}>How was{"\n"}
              the experience ?</Text>
            <Text style={styles.experience_description}>
              Your feedbacks are valuable to us.{"\n"}
              help us improve by giving your opinions.
            </Text>
          </View>
          <View style={styles.button_container}>
            <CustomButton
              borderRadius={30}
              title={"Give feedback"}
            />
          </View>
        </View>
      </GlobalContainer>
    </ScrollView>
  );
};

export default ReportsScreen;

const styles = StyleSheet.create({
  calendar_box: {
    width: "100%",
    height: 56,
    backgroundColor: color5,
    alignItems: "center",
    justifyContent: "center",
  },
  calendar_items: {
    color: "#fff",
    fontSize: 16,
  },
  screen_time_box: {
    marginTop: Sizes.size35,
  },
  screen_time_title: {
    color: color5,
    fontSize: 16,
    fontWeight: "bold",
  },
  chart_container: {
    borderWidth: 1,
    borderRadius: 10,
    height: Sizes.size311,
    marginTop: Sizes.size15,
    backgroundColor: "#FFFCF6",
  },
  application_used_container: {
    marginTop: 40,
  },
  category_titles: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  application_used_title: {
    color: color1,
  },
  show_category_title: {
    color: color2,
  },
  soc_links: {
    flex: 1,
    backgroundColor: "#FFF",
    marginTop: 16,
    padding: 15,
    borderRadius: 15,
  },
  soc_title_box: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  soc_title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
    marginLeft: 8,
  },
  soc_timer: {
    flexDirection: "row",
  },
  arrow: {
    marginTop: 5,
    marginLeft: 5,
  },
  timer: {
    fontWeight: "bold",
    color: "#0A5991",
  },
  line: {
    height: 1,
    backgroundColor: "grey",
    width: "100%",
    marginVertical: 24,
  },
  experience_container: {
    marginTop: Sizes.size80,
  },
  experience_title: {
    color: color5,
    fontSize: 26,
    fontWeight: "bold",
  },
  experience_description: {
    color: color1,
    marginTop: 10,
  },
  button_container: {
    marginTop: Sizes.size40,
  },
});
