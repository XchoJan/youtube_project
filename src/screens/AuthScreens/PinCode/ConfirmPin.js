import React, {useState} from "react";
import {Text, View, StyleSheet, Pressable} from "react-native";
import GlobalContainer from "src/components/GlobalContainer";
import PinCodeInput from "react-native-pincode-input";
import {color1, color2, color6} from "helpers/colors";
import Preview from "src/assets/icons/Preview";
import CustomButton from "src/components/CustomButton";
import {Sizes} from "helpers/sizes";
import {useDispatch} from "react-redux";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";

const ConfirmPin = (props) => {
    const dispatch = useDispatch();

    const [pinCode, setPinCode] = useState("");
    const [inputBorder, setInputBorder] = useState(color2)


    function handleConfirmPinCode() {
        if (props.pinCode !== pinCode) {
            setPinCode('')
            setInputBorder('#EB5757')
        } else {
            setPinCode('')
            setInputBorder(color2)
            dispatch({type: 'IS_LOGGED', payload: true})
        }
    }

    return (
        <GlobalContainer>
            <View style={{flex: 1}}>
                <KeyboardAwareScrollView>
                <View style={styles.title_box}>
                    <Text style={styles.title}>
                        Set your PIN
                    </Text>
                    {inputBorder === '#EB5757' &&
                        <Text style={styles.not_valid_pin}>Pin does not match</Text>}
                    <Text style={styles.description}>
                        Confirm your PIN
                    </Text>
                </View>
                <View style={styles.pin_box}>
                    <PinCodeInput
                        length={4}
                        pin={pinCode}
                        onTextChange={(setPinCode)}
                        circleEmptyStyle={{
                            borderWidth: 1,
                            borderColor: inputBorder,
                            width: 40,
                            height: 40,
                            borderRadius: 10,
                        }}
                        circleFilledStyle={{
                            backgroundColor: inputBorder,
                            borderWidth: 1,
                            borderColor: color2,
                        }}
                    />
                </View>
                <View style={styles.preview_box}>
                    <Text style={styles.preview_icon}>
                        <Preview/>
                    </Text>
                    <Text style={styles.preview_title}>
                        Preview
                    </Text>
                </View>
                </KeyboardAwareScrollView>
            </View>

            <View style={{width: "100%"}}>
                <Pressable onPress={() => {
                    props.navigation.navigate("PinCode");
                }}>
                    <Text style={styles.go_back}>
                        Go Back
                    </Text>
                </Pressable>
                <CustomButton onPress={handleConfirmPinCode} title={"Next"}/>
            </View>
        </GlobalContainer>
    );
};

export default ConfirmPin;

const styles = StyleSheet.create({
    title_box: {
        alignItems: "center",
        paddingTop: Sizes.size112,
    },
    title: {
        fontSize: 24,
        color: color1,
        fontWeight: "bold",
        paddingBottom: Sizes.size10,
    },
    description: {
        color: color1,
        marginTop: Sizes.size10,
    },
    not_valid_pin:{
      color: color6,
      fontSize: 14
    },
    pin_box: {},
    pin_item: {
        borderWidth: 2,
        borderColor: color2,
        borderRadius: 10,
        marginHorizontal: 10,
        width: 40,
        height: 40,
        backgroundColor: "#FFF6E6",
        color: color1,
    },
    preview_box: {
        flexDirection: "row",
        justifyContent: "center",
        top: -40
    },
    preview_icon: {
        top: 3,
        marginRight: Sizes.size6,
    },
    preview_title: {
        color: color1,
        textAlign: "center",
    },
    go_back: {
        color: color2,
        fontSize: 16,
        textAlign: "center",
        marginBottom: Sizes.size20,
    },
});

