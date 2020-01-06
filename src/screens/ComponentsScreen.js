import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
    const greeting = 'Hi there!';
    const newGreeting = <Text>Hello to You!</Text>
    const name = 'Chris'
    return (
        <View> 
            <Text style = { styles.textStyle } > This is the Components Screen Hello </Text>   
            <Text>{greeting}</Text> 
            <Text>{newGreeting}</Text>

            <Text>New Text</Text>
            <Text style = {styles.firstHeader}>Getting Started with React Native!</Text>
            <Text style = {styles.nameHeader}>My name is {name}!</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    },
    firstHeader: {
        fontSize: 45
    },
    nameHeader: {
        fontSize: 20
    }
});

export default ComponentsScreen;