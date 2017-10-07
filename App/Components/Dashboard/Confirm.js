import React from 'react';
import { Text, View, Modal, Dimensions } from 'react-native';
import { CardItem, Button, } from 'native-base';
const window = Dimensions.get('window');

const Confirm = ({ children, visible, onAccept, onDecline }) => {
    const { containerStyle, textStyle, CardSectionStyle, button } = styles;
    return (
        <Modal
            visible={visible}
            transparent
            animationType="slide"
            onRequestClose={() => { }}
        >
            <View style={containerStyle}>
                <CardItem style={CardSectionStyle}>
                    <Text style={textStyle}>{children}</Text>
                </CardItem>
                <CardItem style={CardSectionStyle}>
                    <Button light style={button} onPress={onAccept} ><Text>Yes</Text></  Button>
                    <Button light style={button} onPress={onDecline} ><Text>No</Text></  Button>
                </CardItem>
            </View>
        </Modal>
    );
};

const styles = {
    CardSectionStyle: {
        justifyContent: 'center',
        width: window.width * 0.8,
        alignSelf: 'center',
    },
    textStyle: {
        flex: 1,
        fontSize: 18,
        textAlign: 'center',
        lineHeight: 40
    },
    containerStyle: {
        backgroundColor: 'rgba( 0, 0, 0, 0.75)',
        postion: 'relative',
        flex: 1,
        justifyContent: 'center',
    },
    button: {
        backgroundColor: '#B0BEC5',
        width: window.width * 0.35,
        justifyContent: 'center',
        alignContent: 'center',
        margin: 5,
    },
};

export { Confirm };
