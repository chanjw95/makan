import React from 'react';
import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';

import LoginScreen from '../screens/LoginScreen';
import CookLoginScreen from '../screens/CookLoginScreen';
import KitchenLoginScreen from '../screens/KitchenLoginScreen';
import MainTabNavigator from './MainTabNavigator';

const AuthStack = createStackNavigator({ Login: LoginScreen });
const CookLoginStack = createStackNavigator({ CookLogin: CookLoginScreen });
const KitchenLoginStack = createStackNavigator({ KitchenLogin: KitchenLoginScreen });

export default createAppContainer(createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Main: MainTabNavigator,
  Auth: AuthStack,
  CookLogin: CookLoginStack,
  KitchenLogin: KitchenLoginStack,
},
{
  initialRouteName: "Auth",
}
));
