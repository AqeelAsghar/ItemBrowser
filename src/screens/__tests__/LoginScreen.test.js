import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Alert } from 'react-native';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import LoginScreen from '../LoginScreen';

// Simple login action mock
const login = (username, password) => ({
  type: 'LOGIN',
  payload: { username, password },
});

// Mock the login action to avoid real AsyncStorage
jest.mock('../../redux/actions/authActions', () => ({
  login: jest.fn((u, p) => ({ type: 'LOGIN', payload: { username: u, password: p } })),
}));

// Mock Alert.alert
jest.spyOn(Alert, 'alert');

// Mock CustomButton
jest.mock('../../components/CustomButton', () => {
  return ({ title, onPress }) => (
    <button onClick={onPress} testID="custom-button">{title}</button>
  );
});

const mockStore = configureStore([]);

describe('LoginScreen', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      auth: {
        error: null,
        isAuthenticated: false,
      },
    });
    store.dispatch = jest.fn();
    jest.clearAllMocks(); // Reset mock calls before each test
  });

  it('dispatches login with entered credentials', () => {
    const { getByPlaceholderText, getByTestId } = render(
      <Provider store={store}>
        <LoginScreen />
      </Provider>
    );

    fireEvent.changeText(getByPlaceholderText('Username'), 'aqeel');
    fireEvent.changeText(getByPlaceholderText('Password'), '123456');
    fireEvent.press(getByTestId('custom-button'));

    expect(store.dispatch).toHaveBeenCalledWith({
      type: 'LOGIN',
      payload: { username: 'aqeel', password: '123456' },
    });
  });

  it('shows error alert if fields are empty', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <LoginScreen />
      </Provider>
    );

    fireEvent.press(getByTestId('custom-button'));

    expect(Alert.alert).toHaveBeenCalledWith(
      'Error',
      'Please enter both username and password.'
    );
  });

  it('shows login failed alert when error in store', () => {
    store = mockStore({
      auth: {
        error: 'Invalid credentials',
        isAuthenticated: false,
      },
    });

    render(
      <Provider store={store}>
        <LoginScreen />
      </Provider>
    );

    expect(Alert.alert).toHaveBeenCalledWith('Login Failed', 'Invalid credentials');
  });
});
