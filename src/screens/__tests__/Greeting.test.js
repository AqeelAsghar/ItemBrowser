// __tests__/Greeting.test.js
import React from 'react';
import { render } from '@testing-library/react-native';
import Greeting from '../../components/Greeting';

test('renders greeting with name', () => {
  const { getByText } = render(<Greeting name="Aqeel" />);
  expect(getByText('Hello, Aqeel!')).toBeTruthy();
});
