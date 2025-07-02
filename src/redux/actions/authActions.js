// redux/actions/authActions.js
import AsyncStorage from '@react-native-async-storage/async-storage';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT = 'LOGOUT';

export const login = (username, password) => async (dispatch) => {
    try {
        // Simulate an API call for login
        if (username === 'user' && password === 'password') {
            await AsyncStorage.setItem('userToken', 'dummy-token'); // Store token
            dispatch({ type: LOGIN_SUCCESS, payload: { user: { username } } });
        } else {
            dispatch({ type: LOGIN_FAILURE, payload: 'Invalid credentials' });
        }
    } catch (error) {
        dispatch({ type: LOGIN_FAILURE, payload: error.message });
    }
};

export const logout = () => async (dispatch) => {
    await AsyncStorage.removeItem('userToken'); // Remove token
    dispatch({ type: LOGOUT });
};

export const checkLoginStatus = () => async (dispatch) => {
    try {
        const userToken = await AsyncStorage.getItem('userToken');
        if (userToken) {
            dispatch({ type: LOGIN_SUCCESS, payload: { user: { username: 'user' } } }); // Re-login if token exists
        }
    } catch (error) {
        console.error('Failed to check login status:', error);
    }
};