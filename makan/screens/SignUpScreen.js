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
import { SegmentedControls } from 'react-native-radio-buttons';
import { WebBrowser } from 'expo';
import { ExpoLinksView } from '@expo/samples';

import { MonoText } from '../components/StyledText';

export default class SignUpScreen extends React.Component {
  state = {
    email: '',
    password: '',
  };

  onLogin() {
    const { email, password, password2 } = this.state;

    Alert.alert('Credentials', `email: ${email} + password: ${password} + password2: ${password2}`);
  }

  static navigationOptions = {
    title: 'Sign Up',
  };
  render() {
    const {navigate} = this.props.navigation;

    return (
      <View style = {styles.container}>
        <TextInput
          value = {this.state.email}
          keyboardType = 'email-address'
          onChangeText={(email) => this.setState({ email })}
          placeholder ='Email'
          placeholderTextColor = 'black'
          style={styles.input}
        />
        <TextInput
          value = {this.state.password}
          onChangeText={(password) => this.setState({ password })}
          placeholder ='Password'
          placeholderTextColor = 'black'
          style={styles.input}
        />
        <TextInput
          value = {this.state.password2}
          onChangeText={(password2) => this.setState({ password2 })}
          placeholder ='Re-enter Password'
          placeholderTextColor = 'black'
          style={styles.input}
        />
        <View style= {styles.buttonsView}>
          <TouchableOpacity
            style = {styles.button}
            onPress = {this.onLogin.bind(this)}
          >
            <Text style = {styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style= {styles.button}
            onPress = {() => navigate('Auth', {name: 'LoginScreen'})}
          >
            <Text style = {styles.buttonText}>Back</Text>
          </TouchableOpacity>
        </View>
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
  buttonsView: {
    flex: 2,
    flexDirection: 'column',
    alignItems: 'center',
  },
  button: {
  alignItems: 'center',
  backgroundColor: 'powderblue',
  width: 100,
  height: 44,
  padding: 10,
  borderWidth: 1,
  borderColor: 'black',
  borderRadius: 25,
  marginBottom: 10
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
