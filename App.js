import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';
import { LoaderScreen, Colors } from 'react-native-ui-lib';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

import { useFonts } from 'expo-font';

import Intro from './src/screens/Intro';
import Login from './src/screens/Login';
import Registration from './src/screens/Registration';
import Schedule from './src/screens/Schedule';
import Voting from './src/screens/Voting';

export default () => {
  const [fontsLoaded] = useFonts({
    'Inter-Black': require('./assets/InterFont/Inter-Black.ttf'),
    'Inter-Bold': require('./assets/InterFont/Inter-Bold.ttf'),
    'Inter-ExtraBold': require('./assets/InterFont/Inter-ExtraBold.ttf'),
    'Inter-ExtraLight': require('./assets/InterFont/Inter-ExtraLight.ttf'),
    'Inter-Light': require('./assets/InterFont/Inter-Light.ttf'),
    'Inter-Medium': require('./assets/InterFont/Inter-Medium.ttf'),
    'Inter-Regular': require('./assets/InterFont/Inter-Regular.ttf'),
    'Inter-SemiBold': require('./assets/InterFont/Inter-SemiBold.ttf'),
    'Inter-Thin': require('./assets/InterFont/Inter-Thin.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Intro" component={Intro} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Registration" component={Registration} />
      <Stack.Screen name="Schedule" component={Schedule} />
      <Stack.Screen name="Voting" component={Voting} />

    </Stack.Navigator>
    </NavigationContainer>
  )
};