import React, { useState } from "react";
import { Image, Text, View, StyleSheet } from "react-native";
import Ribbon from "src/assets/icons/Ribbon";
import CustomButton from "src/components/CustomButton";
import { Sizes } from "src/helpers/sizes";
import { color1, color5 } from "src/helpers/colors";

const Supervise = (props) => {
    const {Available, Title, Description, Icon, Frame} = props
    const [supervise_height, setSuperviseHeight] = useState(291);
    const [visible, setVisible] = useState(false)

    function handleShowLess(){
    }
    return (
        <View style={[styles.supervise_item, {height: supervise_height}]}>

            {Available ? <View style={styles.ribbon_box}>
                <Ribbon/>
                <Text style={styles.available_title}>Available Now!</Text>
            </View> : <View style={{marginTop: 19}}/>}

            <View style={styles.supervise_item_wrapper}>
                <View style={{ width: "100%", flexDirection: 'row', }}>
                    <View style={{width: '45%'}}>
                        <View>
                            {Icon}
                        </View>
                        <Text style={styles.supervise_title}>
                            {Title}
                        </Text>
                        <Text style={styles.supervise_description}>
                            {Description}
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
                    <View style={styles.supervise_images}>
                        {Frame}
                    </View>
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
        top: 4,
        left: 15
    },
    supervise_item_wrapper: {
        paddingLeft: 24,
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
        width: '55%',
        alignSelf: "flex-end",
        alignItems: "flex-end",
        top: '10%'
    },
})
