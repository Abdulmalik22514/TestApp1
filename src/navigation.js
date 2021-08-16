// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AllStories from './screens/stories/stories';
import AboutMe from './screens/portfolio/about';
import Home from './screens/home/home';
import Login from './screens/login/login';

const Stack = createStackNavigator();

function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="about" component={AboutMe} />
        <Stack.Screen name="stories" component={AllStories} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
