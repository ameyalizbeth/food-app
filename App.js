

import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Homescreen from './src/screens/homescreen';
import Restaurantpage from './src/screens/restaurantpage';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="ZOMATO"
          component={Homescreen}
         
        />
        <Stack.Screen name="restaurants" component={Restaurantpage} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
