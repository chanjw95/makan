import React, {components} from 'react';
import {AppRegistry} from 'react-native';
import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';

import LoginScreen from '../screens/LoginScreen';
import MainPageScreen from '../screens/MainPageScreen';
import SignUpScreen from '../screens/SignUpScreen';
import CustomerLoginScreen from '../screens/CustomerLoginScreen';
import CookLoginScreen from '../screens/CookLoginScreen';
import KitchenLoginScreen from '../screens/KitchenLoginScreen';
import MainTabNavigator from './MainTabNavigator';
import CookFlatList from '../components/CookList';
import SettingsMenu from '../components/SettingsMenu';
import AccountInfo from '../components/AccountInformation';
import CustSupport from '../components/CustomerSupport';

AppRegistry.registerComponent('makan', ()=> CookFlatList);


const App = createStackNavigator({
   AuthStack: { screen: LoginScreen },
   MainPage: { screen: MainPageScreen, navigationOptions: {
        header: null},
 },
   SignUp: { screen: SignUpScreen },
   Login: { screen: LoginScreen },
   CustomerLoginStack: { screen: CustomerLoginScreen },
   CookLoginStack: { screen: CookLoginScreen },
   KitchenLoginStack:{ screen: KitchenLoginScreen },   
   SettingsMenuStack:{ screen: SettingsMenu },
   AccountInformation: { screen: AccountInfo },
   CustomerSupport: { screen: CustSupport },
  },
  {
    initialRouteName: "MainPage", 
  }
); 
export default createAppContainer(App);

