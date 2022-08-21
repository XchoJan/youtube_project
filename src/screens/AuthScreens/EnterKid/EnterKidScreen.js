import React, { useState } from "react";
import SignInContainer from "../../../components/SignInContainer";
import { TextInput, View, StyleSheet, Text, Image } from "react-native";
import { Sizes } from "../../../helpers/sizes";
import CustomButton from "../../../components/CustomButton";
import { color2 } from "../../../helpers/colors";
import DropDownPicker from "react-native-dropdown-picker";

const EnterKidScreen = (props) => {
  let [kidName, setKidName] = useState("");
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);

  const [items, setItems] = useState([
    { label: "1 years", value: "1" },
    { label: "2 years", value: "2" },
    { label: "3 years", value: "3" },
    { label: "4 years", value: "4" },
    { label: "5 years", value: "5" },
    { label: "6 years", value: "6" },
    { label: "7 years", value: "7" },
    { label: "8 years", value: "8" },
    { label: "9 years", value: "9" },
    { label: "10 years", value: "10" },
  ]);
  let completed = (!(kidName.length && value));
  return (
    <SignInContainer title={"Enter kid details"}>
      <View style={{ flex: 1 }}>
        <View style={[styles.input, {
          marginBottom: Sizes.size40,
          borderColor: kidName.length ? color2 : "transparent",
          borderWidth: kidName.length && 2,
        }]}>
          <TextInput
            placeholder={"Kid nickname"}
            placeholderTextColor={"#828282"}
            onChangeText={setKidName}
            value={kidName}
            style={{ color: "#333333" }}
          />
        </View>
        <View>
          <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            labelStyle={{
              fontWeight: "bold"
            }}
            placeholder={'Kid age'}
            containerStyle={{ height: 50}}
            style={[styles.dropdown, {borderColor: value && color2, borderWidth: value && 2}]}
          />
        </View>
      </View>
      <View style={styles.image_box}>
        <Image source={require("../../../assets/images/Frame229.png")} style={styles.image} />
      </View>
      <View>
        <CustomButton
          backgroundColor={completed ? "#FCD380" : "#FFA800"}
          title={"Next"}
          disabled={completed}
          onPress={() => {
            props.navigation.navigate("Permissions");
          }}
        />
      </View>
    </SignInContainer>
  );
};

export default EnterKidScreen;

const styles = StyleSheet.create({
  input: {
    backgroundColor: "rgba(255, 211, 128, 0.2)",
    padding: 5,
    borderRadius: 15,

  },
  image_box: {
    alignItems: "center",
    marginBottom: Sizes.size35,
  },
  image: {
    width: 182,
    height: 129,
  },
  dropdown: {
    backgroundColor: "rgba(255, 211, 128, 0.2)",
    height: 60,
    borderRadius: 15,
    width: "100%",
    alignSelf: "flex-start",

  },
  dropdown_container: {
    backgroundColor: "rgba(255, 211, 128, 0.2)",
  },
});
