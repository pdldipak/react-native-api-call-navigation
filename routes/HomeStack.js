import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/home/Home';
import ReviewDetails from '../screens/review/ItemDetails';
import Header from '../components/Header';
const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: () => <Header title="Home" />,
          headerStyle: { backgroundColor: 'pink' },
        }}
      />

      <Stack.Screen
        name="Details"
        component={ReviewDetails}
        options={{ title: 'Items Details' }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
