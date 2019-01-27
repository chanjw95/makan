import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { WebBrowser } from 'expo';
import { ExpoLinksView } from '@expo/samples';

import { MonoText } from '../components/StyledText';

export default class LoginScreen extends React.Component {
  static navigationOptions = {
    title: 'Login'
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.customerButton}
          onPress={() => navigate("CustomerLogin", {screen: "CustomerLoginScreen"})}
        >
          <Text style={styles.buttonText}>Customer</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.cookButton}
          onPress={() => navigate("CookLogin", {screen: "CookLoginScreen"})}
        >
          <Text style={styles.buttonText}>Cook</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.kitchenButton}
          onPress={() => navigate("KitchenLogin", {screen: "KitchenLoginScreen"})}
        >
          <Text style={styles.buttonText}>Kitchen</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.signUp}
          onPress={() => navigate("SignUp", {screen: "SignUpScreen"})}
        >
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  customerButton: {
    alignItems: 'center',
    backgroundColor: '#ff0000',
    width: 300,
    height: 60,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    margin: 20,
  },
  cookButton: {
    alignItems: 'center',
    backgroundColor: '#33cc33',
    width: 300,
    height: 60,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    margin: 20,
  },
  kitchenButton: {
    alignItems: 'center',
    backgroundColor: '#3385ff',
    width: 300,
    height: 60,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    margin: 20,
  },
  signUp: {
    alignItems: 'center',
    width: 300,
    height: 60,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    margin: 20,
  },
  buttonText: {
    fontSize: 35,
    alignItems: 'center',
  },
});
