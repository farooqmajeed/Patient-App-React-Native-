import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Image,
    AsyncStorage,
    Platform
} from 'react-native';
// import Header from "../header/";

import { Container, Form, Thumbnail, Item, Input, Label, Title, Content, Button, Left, Right, Body, Icon, Text } from 'native-base';

export default class SignUp extends Component {
    state = {
        userName: null,
        email: null,
        password: null
    }
    signUp = () => {
        if (this.state.email && this.state.password && this.state.userName) {
            this.props.signup({ email: this.state.email, password: this.state.password, userName: this.state.userName });
        }
        else {
            alert("Required fill all feild")
        }
    }
    componentWillReceiveProps(newProps) {
        if (newProps.userData.isRegistered) {
            this.props.navigation.goBack();
        }
    }
    render() {
        return (
            <Container>
                {/* <Header name="Authentication" iconName="arrow-back" clickEvent={() => this.props.navigation.goBack()} /> */}
                <Image style={{
                    flex: 1,
                    width: window.width * 1,
                    height: window.height * 1,
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    resizeMode: 'stretch',
                    opacity: 0.3
                }} source={require("../../Assets/image2.jpg")} />
                <Content>
                    <View style={styles.imageStyle}>
                        <Thumbnail
                            style={styles.imageThumbnail}
                            source={require("../../Assets/image4.png")}
                        />
                        <Form style={styles.formStyle}>
                            <Item floatingLabel style={{ opacity: 1.8, }}>
                                <Icon style={{ color: 'black' }} name="person" />

                                <Label style={{ color: 'black' }}>UserName</Label>
                                <Input onChangeText={(value) => this.setState({ userName: value })} />
                            </Item>
                            <Item floatingLabel>
                                <Label style={{ color: 'black' }}>Email</Label>
                                <Input onChangeText={(value) => this.setState({ email: value })} />
                            </Item>
                            <Item floatingLabel>
                                <Icon style={{ color: 'black' }} name="lock" />
                                <Label style={{ color: 'black' }}>Password</Label>
                                <Input secureTextEntry onChangeText={(value) => this.setState({ password: value })} />
                            </Item>
                            <Button style={styles.loginButton} onPress={() => this.signUp()} full info>
                                <Text style={{ color: 'black' }}>Register</Text>
                            </Button>
                        </Form>
                    </View>
                </Content>
            </Container >
        );
    }
}
// const styles = {
//     imageThumbnail: {
//         width: 200,
//         height: 200,
//         opacity: 0
//     },
//     imageStyle: {
//         justifyContent: 'center',
//         alignItems: 'center',
//         opacity: 1,


//     },
//     formStyle: {
//         width: "90%",
//         fontWeight: 'bold',
//         // opacity: 1
//         // backgroundColor: '#E3F2FD',
//     },
//     loginButton: {
//         width: "95%",
//         marginLeft: 15,
//         marginTop: 20,
//     },
//     notlogged: {
//         color: "white",
//         fontWeight: "bold",
//         marginTop: 13,
//     },
//     containerStyle: {
//         width: window.width * 1,
//         height: window.height * 1,
//         backgroundColor: '#3D5AFE30',
//         // opacity: 0.5
//     }

// }

const styles = {
    imageThumbnail: {
        width: 200,
        height: 200,
        opacity: 0
    },
    imageStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 1,


    },
    formStyle: {
        width: "90%",
        fontWeight: 'bold',
        // opacity: 1
        // backgroundColor: '#E3F2FD',
    },
    loginButton: {
        width: "95%",
        marginLeft: 15,
        marginTop: 20,
    },
    notlogged: {
        color: "black",
        fontWeight: "bold",
        marginTop: 13,
    },
    containerStyle: {
        width: window.width * 1,
        height: window.height * 1,
        backgroundColor: '#3D5AFE30',
        // opacity: 0.5
    }

}
