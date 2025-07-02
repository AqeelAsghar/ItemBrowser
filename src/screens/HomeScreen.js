// screens/HomeScreen.js
import React, { useEffect, useCallback } from 'react';
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    TouchableOpacity,
    Button,
    RefreshControl,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { fetchItems } from '../redux/actions/itemActions';
import { logout } from '../redux/actions/authActions';
import LoadingIndicator from '../components/LoadingIndicator';
import ErrorMessage from '../components/ErrorMessage';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
    const dispatch = useDispatch();
    const { items, loading, error } = useSelector((state) => state.items);
    const navigation = useNavigation();

    useEffect(() => {
        dispatch(fetchItems());
    }, [dispatch]);

    const onRefresh = useCallback(() => {
        dispatch(fetchItems());
    }, [dispatch]);

    const handleLogout = () => {
        dispatch(logout());
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={styles.itemContainer}
            onPress={() => navigation.navigate('Detail', { item })}
        >
            <Text style={styles.itemTitle}>{item.title}</Text>
            <Text style={styles.itemBody} numberOfLines={2}>
                {item.body}
            </Text>
        </TouchableOpacity>
    );

    if (loading && items.length === 0) {
        return <LoadingIndicator />;
    }

    if (error && items.length === 0) {
        return <ErrorMessage message={error} />;
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.screenTitle}>Item List</Text>
                <Button title="Logout" onPress={handleLogout} color="#ff6347" />
            </View>
            <FlatList
                data={items}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderItem}
                contentContainerStyle={styles.listContent}
                refreshControl={
                    <RefreshControl refreshing={loading} onRefresh={onRefresh} />
                }
                ListEmptyComponent={
                    !loading && !error && <Text style={styles.emptyText}>No items found.</Text>
                }
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f2f5',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    screenTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    },
    listContent: {
        paddingVertical: 10,
        paddingHorizontal: 15,
    },
    itemContainer: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 8,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
    },
    itemTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#333',
    },
    itemBody: {
        fontSize: 14,
        color: '#666',
    },
    emptyText: {
        textAlign: 'center',
        marginTop: 50,
        fontSize: 16,
        color: '#888',
    },
});

export default HomeScreen;