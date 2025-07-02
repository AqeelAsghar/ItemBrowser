// App.js
import React, { useEffect } from 'react';
import { Provider, useDispatch } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';
import store from './src/redux/store';
import { checkLoginStatus } from './src/redux/actions/authActions';

const AppContent = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(checkLoginStatus());
    }, [dispatch]);

    return <AppNavigator />;
};

export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <AppContent />
            </NavigationContainer>
        </Provider>
    );
}