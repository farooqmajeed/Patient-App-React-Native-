import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Image,
    AsyncStorage,
    Platform,
    Dimensions,
} from 'react-native';
import { NavigationActions } from "react-navigation";

import { Container, Form, Thumbnail, Item, Input, Label, Title, Content, Button, Left, Right, Body, Icon, Text, CardItem } from 'native-base';

const window = Dimensions.get('window');

export default class Login extends Component {
    constructor(props) {
        super(props);
        console.log(this.props)
    }
    state = {
        email: "",
        password: ""
    }
    componentWillMount() {
        AsyncStorage.getItem('token', (err, result) => {
            if (result) {
                this.props.navigation.dispatch(NavigationActions.reset({ index: 0, actions: [NavigationActions.navigate({ routeName: 'dashboard' })] }))
            }
        })
    }
    componentWillReceiveProps(newProps) {
        if (newProps.user.isAuthenticated) {
            this.props.navigation.dispatch(NavigationActions.reset({ index: 0, actions: [NavigationActions.navigate({ routeName: 'dashboard' })] }))
            AsyncStorage.setItem('token', "1234Admin78910");
        }
        else if (newProps.user.isError) {
            alert("Invalid username and password");
        }
    }
    login = () => {
        this.props.login({ email: this.state.email, password: this.state.password });
        AsyncStorage.getItem('user', (err, res) => {
            let user = JSON.parse(res);
            if (this.state.email == user.email && this.state.password == user.password) {
                alert("Congratulations!!");
                AsyncStorage.setItem('token', "1234Admin78910");
                this.props.navigation.dispatch(NavigationActions.reset({ index: 0, actions: [NavigationActions.navigate({ routeName: 'dashboard' })] }))

            }
            else {
                alert("Failed Please try gain")
            }
        })
    }

    render() {
        return (
            <Container style={styles.containerStyle}>
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
                {/* <Header name="Authentication" iconName="menu" /> */}
                <Content>
                    <View style={styles.imageStyle}>
                        <Thumbnail
                            style={styles.imageThumbnail}
                            source={require("../../Assets/image4.png")}
                        />
                        <CardItem style={{ backgroundColor: '#3D5AFE90' }}>
                            <Form style={styles.formStyle}>
                                <Item floatingLabel style={{ opacity: 1.8, }}>
                                    <Icon style={{ color: 'black' }} name="person" />

                                    <Label style={{ color: 'black' }}>Email</Label>
                                    <Input onChangeText={(value) => this.setState({ email: value })} />
                                </Item>
                                <Item floatingLabel>
                                    <Icon style={{ color: 'black' }} name="lock" />

                                    <Label style={{ color: 'black' }}>Password</Label>
                                    <Input onChangeText={(value) => this.setState({ password: value })} secureTextEntry />
                                </Item>
                                <Button style={styles.loginButton} onPress={() => this.login()} full info>
                                    <Text style={{ color: 'black' }}>Login</Text>
                                </Button>
                            </Form>
                        </CardItem>
                        <Text onPress={() => this.props.navigation.navigate('signup')} style={styles.notlogged}>
                            <Icon style={{ color: 'black' }} name="person-add" />   Register
                                </Text>
                    </View>
                </Content>
            </Container >

        );
    }
}
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
