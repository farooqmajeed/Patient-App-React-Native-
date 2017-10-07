import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Image,
    AsyncStorage,
    Platform,
    TouchableOpacity
} from 'react-native';
import Header from './Header';
import Home from "../Main/Home";
import { Container, Grid, Col, Row, Card, CardItem, Body, Footer, FooterTab, Icon, Text, Left, Button, Title, Content, Thumbnail } from 'native-base';
export default class Dashboard extends Component {
    static navigationOptions = {
        tabBarLabel: 'Main',
    };
    state = {
        value: 0
    }
    logOut = () => {
        AsyncStorage.removeItem('token', () => {
            this.props.navigation.navigate('login')
        })
    }
    render() {
        return (
            <Container>
                <Image style={Style.backImage} source={require("../../Assets/image12.jpg")}>
                    <Header style={{ marginLeft: 15 }} name="Patient Application" iconName="menu" />
                    <Content>
                        <Home logout={this.logOut} navigation={this.props.navigation} />
                    </Content>
                </Image>
            </Container>
        );
    }
}

const Style = {
    backImage: {
        flex: 1, width: null, height: null
    },
    mainWindow: {
        flex: 1,
        display: "flex",
    },
    icon: { width: 40, height: 40 },
}