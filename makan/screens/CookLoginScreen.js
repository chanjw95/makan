import React from 'react';
import {
  Alert,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Button,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { WebBrowser } from 'expo';
import { ExpoLinksView } from '@expo/samples';

import { MonoText } from '../components/StyledText';

export default class CookLoginScreen extends React.Component {
  state = {
    email: '',
    password: '',
  };

  onLogin() {
    const { email, password } = this.state;

    Alert.alert('Credentials', `email: ${email} + password: ${password}`);
  }
  static navigationOptions = {
    title: 'Cook Login'
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <ScrollView style = {styles.container}>
        <TextInput
          value = {this.state.email}
          keyboardType = 'email-address'
          onChangeText={(email) => this.setState({ email })}
          placeholder ='email'
          placeholderTextColor = 'black'
          style={styles.input}
        />
        <TextInput
          value = {this.state.password}
          onChangeText={(password) => this.setState({ password })}
          placeholder ='password'
          placeholderTextColor = 'black'
          style={styles.input}
        />
        <TouchableOpacity
          style = {styles.button}
          onPress = {this.onLogin.bind(this)}
        >
          <Text style = {styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  button: {
  alignItems: 'center',
  backgroundColor: 'powderblue',
  width: 200,
  height: 44,
  padding: 10,
  borderWidth: 1,
  borderColor: 'black',
  borderRadius: 25,
  marginBottom: 10,
  },
  buttonText: {
    fontSize: 20,
    alignItems: 'center',
  },
  input: {
  width: 200,
  fontSize: 20,
  height: 44,
  padding: 10,
  borderWidth: 1,
  borderColor: 'black',
  marginVertical: 10,
},
});
