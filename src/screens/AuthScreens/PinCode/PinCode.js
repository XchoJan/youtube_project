import React, {useState} from "react";
import GlobalContainer from "src/components/GlobalContainer";
import {StyleSheet, Text, View} from "react-native";
import {color1, color2} from "src/helpers/colors";
import {Sizes} from "src/helpers/sizes";
import Preview from "src/assets/icons/Preview";
import CustomButton from "src/components/CustomButton";
import PinCodeInput from "react-native-pincode-input";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";

const PinCode = (props) => {
    const [pinCode, setPinCode] = useState("");

    function handleCreatePinCode() {
        if (pinCode.length === 4) {
            props.navigation.navigate('ConfirmPin', {
                pinCode: pinCode
            })
        }
    }

    return (
        <GlobalContainer title={"Pin Code"}>
            <View style={{flex: 1}}>
                <KeyboardAwareScrollView>
                    <View style={styles.title_box}>
                        <Text style={styles.title}>
                            Set your PIN
                        </Text>
                        <Text style={styles.description}>
                            Enter a 4 digit PIN
                        </Text>
                    </View>
                    <View style={styles.pin_box}>
                        <PinCodeInput
                            length={4}
                            pin={pinCode}
                            onTextChange={(setPinCode)}
                            circleEmptyStyle={{
                                borderWidth: 1,
                                borderColor: color2,
                                width: 40,
                                height: 40,
                                borderRadius: 10
                            }}
                            circleFilledStyle={{
                                backgroundColor: color2,
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
                <CustomButton
                    onPress={handleCreatePinCode}
                    title={"Next"}/>
            </View>
        </GlobalContainer>
    );
};

export default PinCode;

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
