import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import GlobalContainer from "src/components/GlobalContainer";
import MainHeader from "src/components/MainHeader";
import UpcomingFeatures from "./FeaturesComponents/UpcomingFeatures";
import FeaturesItem from "./FeaturesComponents/FeaturesItem";
import Television from "src/assets/icons/Television";
import RemoteControl from "src/assets/icons/RemoteControl";
import GeoFencing from "src/assets/icons/GeoFencing";
import SuperviseFrame from "src/assets/icons/SuperviseFrame";
import ScheduleFrame from "src/assets/icons/ScheduleFrame";
import GeoFacingFrame from "src/assets/icons/GeoFacingFrame";

const FeaturesScreen = (props) => {
    return (
        <ScrollView style={{backgroundColor: '#fff'}}>
            <GlobalContainer>
                <View>
                    <MainHeader page_title={"Key Features"}/>
                </View>
                <View style={styles.content_box}>
                    <View>
                        <FeaturesItem
                            Available
                            Icon={<Television/>}
                            Title={"Supervise"}
                            Description={"Watch your kids activities on your device in realtime"}
                            BackgroundPhoto={require('../../../assets/images/Ellipse000.png')}
                            Photo={require('../../../assets/images/Frame4451.png')}
                            Frame={<SuperviseFrame/>}
                        />
                    </View>
                    <View style={styles.upcoming_view}>
                        <UpcomingFeatures/>
                    </View>
                    <View style={{marginBottom: 20}}>
                        <FeaturesItem
                            Icon={<RemoteControl/>}
                            Title={"Schedule"}
                            Description={"Schedule and set time limit for apps usage in your kids device"}
                            BackgroundPhoto={require('../../../assets/images/Ellipse000.png')}
                            Photo={require('../../../assets/images/Frame4451.png')}                            Frame={<SuperviseFrame/>}
                            Frame={<ScheduleFrame/>}
                        />
                    </View>
                    <View>
                        <FeaturesItem
                            Icon={<GeoFencing/>}
                            Title={"Schedule"}
                            Description={"Schedule and set time limit for apps usage in your kids device"}
                            BackgroundPhoto={require('../../../assets/images/Ellipse000.png')}
                            Photo={require('../../../assets/images/Frame4451.png')}
                            Frame={<GeoFacingFrame/>}
                        />
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
    upcoming_view: {
        marginTop: 50,
        marginBottom: 25,
    }

});
