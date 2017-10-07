import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Image,
    Text,
    Platform,
    ListView,
    ScrollView,
    Dimensions
} from 'react-native';
import { Container, Header, Left, Body, Right, Thumbnail, Item, Icon, Input, Button, List, ListItem } from "native-base";

const window = Dimensions.get('window');

const PatientList = ({ navigation, data, search, index, deletes }) => {
    if (data) {
        data = JSON.parse(data);
    }
    return (<Container>
        <Image style={styles.backImage} source={require("../../Assets/image12.jpg")} >
            {/*<Header name="Patient List" iconName="arrow-back" clickEvent={() => navigation.goBack()} />*/}
            <Header searchBar style={styles.headerStyle} rounded>
                <Item style={{ backgroundColor: "rgba(255,255,255,0.8)" }}>
                    <Icon name="ios-search" />
                    <Input placeholder="Search" onChangeText={(val) => search(val)} />
                    <Icon name="ios-people" />
                </Item>
                <Button transparent>
                    <Text>Search</Text>
                </Button>
            </Header>
            <ScrollView>
                {data ? <List style={styles.listStyle} >
                    {data.map((arr, indx) => {
                        return (<ListItem style={styles.listStyle2} key={index} avatar onPress={() => navigation.navigate('Profile', { data: arr, index: index, deleted: deletes })}>
                            {/* <Left>
                                <Thumbnail source={require("../../Assets/patient.jpg")} />
                            </Left> */}
                            <Body>
                                <Text>{arr.firstName + " " + arr.lastName}</Text>
                                <Text note>{arr.age}</Text>
                                <Text note>{"Disease: " + arr.disease}</Text>

                            </Body>
                            <Right>
                                <Text note>{arr.date}</Text>
                                <Thumbnail source={require("../../Assets/patient.jpg")} />
                            </Right>
                        </ListItem>)

                    })}
                </List> : <Text>Loading</Text>}
            </ScrollView>
        </Image>
    </Container>)
}
const styles = StyleSheet.create({
    backImage: {
        flex: 1, width: null, height: null
    },
    headerStyle: {
        backgroundColor: (Platform.OS === 'ios') ? '#F8F8F8' : "#22a3d7",

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
export default PatientList;

