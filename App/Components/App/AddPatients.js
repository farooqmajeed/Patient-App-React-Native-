import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Image,
    Dimensions, Platform
} from 'react-native';
import { Container, Button, Text, Grid, Col, Row, Icon, Form, Item, Input, Label, Content } from "native-base";
import Header from '../Dashboard/Header';

const window = Dimensions.get('window');


const AddPatients = ({ navigation, getValues, datePicker, submit, patient, values }) => {
    return (<Container>
        <Image style={styles.backImage} source={require("../../Assets/image12.jpg")} >
            <Header name="Add Patient" iconName="arrow-back" clickEvent={() => navigation.goBack()} />
            {/* <Row style={Style.buttonTop}>
                <Col><Button onPress={() => navigation.goBack()} full info>
                    <Icon name='md-close' />
                    <Text>Cancel</Text>
                </Button></Col>
                <Col><Button full info onPress={add}>
                    <Icon name='md-checkmark' />
                    <Text>Save</Text>
                </Button></Col>
            </Row> */}
            <View style={styles.formStyle}>
                <Content>
                    <Form style={styles.cardStyle}>
                        <Item>
                            <Icon style={styles.iconStyle} name="ios-person" />
                            <Input placeholder='First Name' placeholderTextColor='white' style={styles.iconStyle}
                                value={values.firstName} onChangeText={(value) => getValues("firstName", value)} />
                        </Item>
                        <Item >
                            <Icon style={styles.iconStyle} name="ios-person" />
                            <Input placeholder='Last Name' placeholderTextColor='white' style={styles.iconStyle} value={values.lastName} onChangeText={(value) => getValues("lastName", value)} />
                        </Item>
                        <Item  >
                            <Icon style={styles.iconStyle} name="ios-man" />
                            <Input placeholder='Age' placeholderTextColor='white' value={values.age} style={styles.iconStyle} onChangeText={(value) => getValues("age", value)} />
                        </Item>
                        <Item >
                            <Icon style={styles.iconStyle} name="ios-call" />
                            <Input style={styles.iconStyle} placeholder='Mobile Number' placeholderTextColor='white' style={styles.iconStyle} value={values.mobile_number} onChangeText={(value) => getValues("mobile_number", value)} />
                        </Item>
                        <Item >
                            <Icon style={styles.iconStyle} name="ios-calendar" />
                            <Input placeholder='Date' placeholderTextColor='white' style={styles.iconStyle} onFocus={() => datePicker()} value={values.date} onChangeText={(value) => getValues("date", value)} />
                        </Item>
                        <Item >
                            <Icon style={styles.iconStyle} name="md-medkit" />
                            <Input placeholder='Disease' placeholderTextColor='white' style={styles.iconStyle} value={values.disease} onChangeText={(value) => getValues("disease", value)} />
                        </Item>
                        <Button style={styles.buttonStyle} onPress={submit} >
                            <Text>Add Patient</Text>
                        </Button>
                    </Form>

                </Content>
            </View>
        </Image>
    </Container>)
}
const styles = StyleSheet.create({
    backImage: {
        flex: 1, width: null, height: null
    },
    buttonTop: {
        height: 45
    },
    formStyle: {
        flex: 7
    },
    cardStyle: {
        width: window.width * 0.8,
        flexDirection: 'column',
        alignSelf: 'center',
        marginTop: '10%',
        height: window.height * 0.6,
        // backgroundColor: 'white'
    },
    iconStyle: {
        color: 'white'
    },
    buttonStyle: {
        backgroundColor: "rgba(255,255,255,0.3)",
        margin: 10,
        width: window.width * 0.8,
        // height: window.height * 0.09,
        justifyContent: "center",
        alignSelf: "center",
    }
})
export default AddPatients;

