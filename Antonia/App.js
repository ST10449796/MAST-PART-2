import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignupScreen from './SignupScreen';  // Import the Sign-In screen
import HomePage from './HomePage '; //Import the HomePage 
import MenuScreen from './MenuScreen';  //Import the MenuScreen

const Stack = createNativeStackNavigator();

 function App () {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen name="Sign up" component={SignupScreen} options={{ title: 'Sign up' }} />
        <Stack.Screen name="HomePage" component={HomePage} options={{title:'HomePage'}}/>
        <Stack.Screen name="Menu" component={MenuScreen} options={{title:'Menu'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
