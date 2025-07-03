// src/components/Greeting.js
import React from 'react';
import { Text } from 'react-native';

export default function Greeting({ name }) {
  return <Text>Hello, {name}!</Text>;
}
