// components/ErrorMessage.js
import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ErrorMessage = ({ message }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.errorText}>Error: {message}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    errorText: {
        color: 'red',
        fontSize: 16,
        textAlign: 'center',
    },
});

export default ErrorMessage;