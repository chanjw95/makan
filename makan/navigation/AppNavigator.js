import React from 'react';
import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';

import LoginScreen from '../screens/LoginScreen';
import MainPageScreen from '../screens/MainPageScreen';
import SignUpScreen from '../screens/SignUpScreen';
import CustomerLoginScreen from '../screens/CustomerLoginScreen';
import CookLoginScreen from '../screens/CookLoginScreen';
import KitchenLoginScreen from '../screens/KitchenLoginScreen';
import MainTabNavigator from './MainTabNavigator';

const AuthStack = createStackNavigator({ Login: LoginScreen });
const MainPage = createStackNavigator({ MainPage: MainPageScreen });
const SignUp = createStackNavigator({ SignUp: SignUpScreen });
const Login = createStackNavigator({ Login: LoginScreen });
const CustomerLoginStack = createStackNavigator({ CustomerLogin: CustomerLoginScreen });
const CookLoginStack = createStackNavigator({ CookLogin: CookLoginScreen });
const KitchenLoginStack = createStackNavigator({ KitchenLogin: KitchenLoginScreen });

export default createAppContainer(createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Main: MainTabNavigator,
  Auth: AuthStack,
  MainPage: MainPageScreen,
  Login: LoginScreen,
  SignUp: SignUpScreen,
  CustLogin: CustomerLoginStack,
  CookLogin: CookLoginStack,
  KitchenLogin: KitchenLoginStack,
},
{
  initialRouteName: "MainPage",
}
));
