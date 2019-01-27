import React from 'react';
import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import LoginScreen from '../screens/LoginScreen';
import CustomerLoginScreen from '../screens/CustomerLoginScreen';
import CookLoginScreen from '../screens/CookLoginScreen';
import KitchenLoginScreen from '../screens/KitchenLoginScreen';
import SignUpScreen from '../screens/SignUpScreen';

const AuthStack = createStackNavigator({
  Auth: LoginScreen,
});
const CustomerLoginStack = createStackNavigator({
  CustomerLogin: CustomerLoginScreen,
});
const CookLoginStack = createStackNavigator({
  CookLogin: CookLoginScreen,
});
const KitchenLoginStack = createStackNavigator({
  KitchenLogin: KitchenLoginScreen,
});

const SignUpStack = createStackNavigator({
  SignUp:SignUpScreen,
});

export default createAppContainer(createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Main: MainTabNavigator,
  Auth: AuthStack,
  CustomerLogin: CustomerLoginStack,
  CookLogin: CookLoginStack,
  KitchenLogin: KitchenLoginStack,
  SignUp: SignUpStack,
},
{
  initialRouteName: "Auth",
}
));
