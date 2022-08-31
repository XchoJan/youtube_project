import React, {useState} from "react";
import * as Animatable from 'react-native-animatable';
import {View, StyleSheet, Text, ScrollView, Image, ImageBackground} from "react-native";
import MainHeader from "src/components/MainHeader";
import {color1, color2, color5, color6} from "src/helpers/colors";
import {Sizes} from "src/helpers/sizes";
import CustomButton from "src/components/CustomButton";
import Like from "src/assets/icons/Like";

const HomeScreen = (props) => {
    let [animation, setAnimation] = useState(true)


    let [fadeIn, setFadeIn] = useState({
        from: {
            opacity: 1,
        },
        to: {
            opacity: 1,
        },
    })
    let [showUp, setShopUp] = useState({
        from: {
            opacity: 0,
        },
        to: {
            opacity: 0,
        },
    })
    function handleAnimation() {
        setAnimation(!animation)
        if (animation) {
            setFadeIn({
                from: {
                    opacity: 1,
                },
                to: {
                    opacity: 0,
                },
            })
            setShopUp({
                from: {
                    opacity: 0
                },
                to: {
                    opacity: 1
                }
            })
        } else {
            setFadeIn({
                from: {
                    opacity: 0,
                },
                to: {
                    opacity: 1,
                },
            })
            setShopUp({
                from: {
                    opacity: 1
                },
                to: {
                    opacity: 0
                }
            })
        }

    }

    return (
        <ScrollView>
            <View>
                <MainHeader app_logo/>
            </View>
            <View style={styles.top_wrapper}>

                    <View style={styles.title_box}>
                        <Text style={styles.title}>Today’s <Text style={{color: color2}}>screen time</Text></Text>
                    </View>
                    <View style={styles.timer_titles}>
                        <Text style={styles.hour_title}>Hour</Text>
                        <Text style={styles.hour_title}>Min</Text>
                    </View>

                <View style={{width: '100%', alignItems: 'center', top: 15}}>
                    <View style={{backgroundColor: animation ? '#4E366E' : '#744657', width: 176, height: 120, borderRadius: 10}}>
                        <View style={[styles.timer_box, {backgroundColor: animation ? '#A896B666' : color2}]}>
                            <Text style={styles.timer}>21:12</Text>
                        </View>
                    </View>
                </View>

                <Animatable.View style={{flex: 1, width: '100%'}} animation={showUp} duration={2000}>
                    <ImageBackground  style={{height: 250, width: '100%', top: -30}}
                                      source={require('../../../assets/images/BackgroundBear.png')}/>
                </Animatable.View>
                </View>
            <View style={styles.bottom_wrapper}>
                <View style={styles.coco}>
                    <Animatable.View animation={fadeIn} duration={2000}
                                     style={styles.coco_animatable_view}>
                        <View>
                            <Text style={styles.coco_description}>
                                <Text style={styles.coco_title}>Coco</Text> <Text
                                style={{fontSize: 20, fontWeight: "bold"}}>is
                                ready</Text> {"\n"}
                                to monitor your kid’s{"\n"}
                                screen time.
                            </Text>
                        </View>
                        <View style={{position: "relative"}}>
                            <Image source={require("../../../assets/images/Group86.png")}/>
                        </View>
                    </Animatable.View>
                    <Animatable.View animation={showUp} duration={2000} style={styles.coco_output}>
                        <View>
                            <Like/>
                        </View>
                        <Text style={styles.coco_output_title}>
                            You can hand over this {"\n"}device to your kid now.
                        </Text>
                    </Animatable.View>

                </View>
            </View>
            <View style={{marginBottom: 10}}>
                <View>
                    <Text style={styles.enable_child_description}>Enable Child Mode before handing{"\n"}
                        this device to your kid.</Text>
                </View>
                <View style={{paddingHorizontal: '25%',}}>
                    <CustomButton
                        buttonStyle={{
                            backgroundColor: animation ? color2 : 'transparent',
                            height: 61,
                            borderRadius: 35,
                            borderColor: color2
                        }}
                        color={animation ? 'white' : color2}
                        title={animation ? "Enable Child Mode" : 'Disable child mode'}
                        onPress={handleAnimation}

                    />
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
        paddingHorizontal: 110
    },
    timer_box: {
        width: 154,
        height: 90,
        borderRadius: 10,
        alignSelf: "center",
        marginTop: Sizes.size16,
        alignItems: "center",

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
    coco_animatable_view: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%'
    },
    coco_output: {
        justifyContent: "center",
        alignItems: "center",
        width: '100%',
        position: "absolute",
        left: 25,
        top: 25
    },
    coco_output_title: {
        color: '#000',
        textAlign: "center",
        fontSize: 17,
        paddingTop: 20
    }
});
