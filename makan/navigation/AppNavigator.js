import React from 'react';
import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';

import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import MainTabNavigator from './MainTabNavigator';

const SignUp = createStackNavigator({ SignUp: SignUpScreen });
const Login = createStackNavigator({ Login: LoginScreen });

export default createAppContainer(createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Main: MainTabNavigator,
  Login: LoginScreen,
  SignUp: SignUpScreen,
},
{
  initialRouteName: "Login",
}
));
