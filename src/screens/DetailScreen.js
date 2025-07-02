// screens/DetailScreen.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const DetailScreen = ({ route }) => {
    const { item } = route.params;

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>{item.title}</Text>
            <View style={styles.detailCard}>
                <Text style={styles.label}>ID:</Text>
                <Text style={styles.value}>{item.id}</Text>
            </View>
            <View style={styles.detailCard}>
                <Text style={styles.label}>User ID:</Text>
                <Text style={styles.value}>{item.userId}</Text>
            </View>
            <View style={styles.detailCard}>
                <Text style={styles.label}>Details:</Text>
                <Text style={styles.value}>{item.body}</Text>
            </View>
            {/* Add more item details as per your API response */}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 20,
        backgroundColor: '#f8f8f8',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 25,
        textAlign: 'center',
        color: '#333',
    },
    detailCard: {
        backgroundColor: '#fff',
        padding: 18,
        borderRadius: 10,
        marginBottom: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,
        elevation: 3,
    },
    label: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 5,
        color: '#555',
    },
    value: {
        fontSize: 16,
        color: '#777',
        lineHeight: 24,
    },
});

export default DetailScreen;