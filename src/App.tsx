/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Main from './pages/Main/Main';
import StartRent from './pages/StartRent/StartRent';

const Stack = createNativeStackNavigator();
// const MENU_ITEMS = {
//   Home: {name: 'Home', component: Main},
//   StartRent: {name: 'Start rent', component: StartRent},
// };
const App: React.FC<{}> = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Main} />
      <Stack.Screen name="Start rent" options={{title: 'hello'}}>
        {props => <StartRent {...props} />}
      </Stack.Screen>
    </Stack.Navigator>
  </NavigationContainer>
);

// const styles = StyleSheet.create({});

export default App;
