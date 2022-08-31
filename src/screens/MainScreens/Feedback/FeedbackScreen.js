import React, { useState } from "react";
import { Text, View, StyleSheet, FlatList, TextInput, Pressable } from "react-native";
import { Sizes } from "src/helpers/sizes";
import { color5 } from "src/helpers/colors";
import CustomButton from "src/components/CustomButton";
import Star from "src/assets/icons/Star";

const FeedbackScreen = (props) => {
  const count = [1, 2, 3, 4, 5];
  const colors = ["#FF4A4F", "#FF8C7C", "#FFAC54", "#FFC958", "#F2C94C"]

  const [feedback] = useState([
    {
      id: 1,
      letter: "A.",
      feedback: "How was the onboarding process?",
      grade: "Excellent",
      stars: 5,
    },
    {
      id: 2,
      letter: "B.",
      feedback: "How accurate is the data on the  monitoring page? *",
      grade: "Good",
      stars: 4,
    },
    {
      id: 3,
      letter: "C.",
      feedback: "How well are you able to understand \n" +
        "all the insights that the application is \n" +
        "providing ? *",
      grade: "Fine",
      stars: 3,
    },
    {
      id: 4,
      letter: "D.",
      feedback: "How did you like the interface of the \n" +
        "application? *",
      grade: "Bad",
      stars: 2,
    },
  ]);


  const renderProduct = ({ item }) => {
    return (
      <View style={styles.content_box}>
        <View style={styles.content_item}>
          <Text style={styles.letter}>{item.letter}<Text style={styles.feedback}>{item.feedback}</Text></Text>
          <Text style={styles.grade}>{item.grade}</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          {count.map((_, index) => (
            <Text>
              {item.stars <= index  ? (
                <Star fill={'#828282'} />
              ) : (
                <Star fill={colors[item.stars - 1]} />
              )}
            </Text>
          ))}
        </View>
      </View>
    );
  };

  const flatListFooter = () => {
    return (
      <View>
        <Text style={styles.footer_title}>
          Any suggestions, improvements for us ?
        </Text>
        <View style={styles.input_box}>
          <TextInput
            style={styles.input}
            placeholderTextColor={"#000"}
            placeholder={"Type here! (Optional)"}
          />
        </View>
        <View style={styles.button_box}>
          <CustomButton title={"Submit feedback"} />
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={()=>{props.navigation.navigate("Profile")}}>
          <Text style={styles.header_item}>Cancel</Text>
        </Pressable>
        <Text style={styles.header_item}>Customer feedback</Text>
      </View>
      <View style={styles.feedback_list}>
        <FlatList
          data={feedback}
          renderItem={renderProduct}
          extraData={feedback}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={flatListFooter}
        />
      </View>
    </View>
  );
};

export default FeedbackScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: Sizes.size57,
    backgroundColor: color5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: 38,
    flexDirection: "row",
    alignItems: "center",
  },
  header_item: {
    color: "#fff",
    marginHorizontal: 20,
  },
  feedback_list: {
    flex: 1,
    marginTop: 25,
    paddingHorizontal: 16,
  },
  content_box: {
    marginBottom: 10,
    height: 150,
    backgroundColor: "#FFFCF6",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 26,

  },
  content_item: {
    paddingHorizontal: 16,
    width: "100%",
  },
  letter: {
    color: "#8562A1",
  },
  feedback: {
    color: "#000",
  },
  grade: {
    color: "#8562A1",
    fontWeight: "bold",
    marginTop: 16,
  },
  footer_title: {
    color: "#512F6D",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 40,
  },
  input_box: {
    backgroundColor: "#fff",
    marginTop: 10,
    borderRadius: 10,
  },
  input: {
    textAlign: "center",
    height: 200,
  },
  button_box: {
    marginTop: 24,
    marginBottom: 10,
  },
});
