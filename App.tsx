import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

import {Text} from 'react-native';

export default function App() {
  return (
    <NavigationContainer>
      <Text>App</Text>
      <Icon name="rocket" size={30} color="#900" />
    </NavigationContainer>
  );
}
