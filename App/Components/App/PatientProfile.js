import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Image,
    Platform,
    Linking
} from 'react-native';
import { Container, Card, CardItem, Content, Left, Text, Body, Right, Thumbnail, Item, Icon, Button, List, ListItem } from "native-base";

import Header from "../Dashboard/Header";

const PatientProfile = (props) => {
    const profileData = props.navigation.state.params.data;
    console.log("dataaa ", profileData)
    console.log("props.navigation.state.params.index", props.navigation.state.params.deleted(props.navigation.state.params.index))

    return (<Container>
        {/*<Image style={Style.backImage} source={require("../../assets/back.png")} >*/}
        <Header name="Patient Profile" iconName="arrow-back" clickEvent={() => props.navigation.goBack()} />
        <Content>
            <Image style={Style.avatar} source={require("../../Assets/image12.jpg")}>
                <View>
                    <Thumbnail source={require("../../Assets/patient.jpg")} circle large />
                </View>
                <View>
                    <Text style={Style.name}>{profileData.firstName + " " + profileData.lastName}</Text>
                    <Text onPress={() => Linking.openURL("tel:" + profileData.mobile_number)} style={Style.name}>{profileData.mobile_number}</Text>
                </View>
            </Image>
            <Card style={Style.listStyle} >
                <List style={Style.listStyle}>
                    <ListItem style= {Style.listStyle2} >
                        <Left>
                            <Text>First Name </Text>
                        </Left>
                        <Right>
                            <Text note>
                                {profileData.firstName}
                            </Text>
                        </Right>
                    </ListItem>
                    <ListItem style= {Style.listStyle2}>
                        <Left>
                            <Text>Last Name </Text>
                        </Left>
                        <Right>
                            <Text note>
                                {profileData.lastName}
                            </Text>
                        </Right>
                    </ListItem>
                    <ListItem style= {Style.listStyle2} >
                        <Left>
                            <Text>Age</Text>
                        </Left>
                        <Right>
                            <Text note>
                                {profileData.age}
                            </Text>
                        </Right>
                    </ListItem>
                    <ListItem style= {Style.listStyle2} >
                        <Left>
                            <Text>Disease</Text>
                        </Left>
                        <Right>
                            <Text note>
                                {profileData.disease}
                            </Text>
                        </Right>
                    </ListItem>
                    <ListItem style= {Style.listStyle2}>
                        <Left>
                            <Text>Date of arrival</Text>
                        </Left>
                        <Right>
                            <Text note>
                                {profileData.date}
                            </Text>
                        </Right>
                    </ListItem>
                </List>
            </Card>
            <Button full danger onPress={() => { props.navigation.state.params.deleted(props.navigation.state.params.index); props.navigation.goBack() }}>
                <Text>Delete </Text>
            </Button>
        </Content>
        {/*</Image>*/}
    </Container>)
}
const Style = StyleSheet.create({
    backImage: {
        flex: 1, width: null, height: null
    },
    headerStyle: {
        backgroundColor: (Platform.OS === 'ios') ? '#F8F8F8' : "#22a3d7",
    },
    avatar: {
        flex: 1, justifyContent: "flex-start", paddingTop: 10,
        alignItems: "center", height: 150, width: "100%"
    },
    name: {
        // color: "white",
        textAlign: "center"
    },
    listStyle: {
        backgroundColor: "rgba(255,255,255,0.3)",
        margin: 5,
        width: window.width * 0.98,

    },
     listStyle2: {
        backgroundColor: "rgba(255,255,255,0.3)",
        margin: 5,
        width: window.width * 0.9,

    }
})
export default PatientProfile;

