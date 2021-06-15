import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Header from '../components/Header';
import About from '../screens/about/About';

const Stack = createStackNavigator();

const AboutStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="About"
        component={About}
        options={{
          headerTitle: () => <Header title="About" />,
          headerStyle: { backgroundColor: 'pink' },
          height: 60,
        }}
      />
    </Stack.Navigator>
  );
};

export default AboutStack;
