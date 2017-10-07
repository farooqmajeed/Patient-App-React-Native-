import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Image,
    AsyncStorage,
    Platform,
    TouchableOpacity,
    Dimensions
} from 'react-native';
const window = Dimensions.get('window');

import { Grid, Col, Row, Header, Card, CardItem, Body, Footer, FooterTab, Icon, Text, Left, Button, Content, } from 'native-base';

const Main = ({ logout, navigation }) => {
    console.log(logout)
    return (<View>

        <Grid style={styles.mainWindow}>
            <Row>
                <Col style={styles.icon}>
                    <Image style={styles.icon} source={require("../../Assets/image1.jpg")} />
                </Col>

            </Row>
            <Col>
                <Button style={styles.buttonStyle} onPress={() => navigation.navigate('AddPatient')} >
                    <Icon name='person-add' />
                </Button>
                <Button style={styles.buttonStyle} onPress={() => navigation.navigate('PatientList')}>
                    <Icon name='list-box' />
                </Button>
                <Button style={styles.buttonStyle} onPress={logout}>
                    <Icon name='md-log-out' />
                </Button>
            </Col>
        </Grid>
    </View >)
}
const styles = {
    mainWindow: {
        flex: 1,
        display: "flex",
        height: window.height * 1,
    },
    icon: {
        width: window.width * 1,
        height: window.height * 0.5,
    },
    imageStyle: {
        width: window.width * 0.05,
        height: window.height * 0.02,
        justifyContent: 'flex-end'
    },
    buttonStyle: {
        backgroundColor: "rgba(255,255,255,0.3)",
        margin: 5,
        width: window.width * 0.8,
        justifyContent: "center",
        alignSelf: "center",
    }

}


export default Main;