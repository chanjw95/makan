import React from 'react';
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Alert,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { WebBrowser } from 'expo';
import { ExpoLinksView } from '@expo/samples';
import { MonoText } from '../components/StyledText';

export default class LoginScreen extends React.Component {
  static navigationOptions = {
   header: null
  };
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      auth_token: ''
    }
  this.handleEmail = this.handleEmail.bind(this);
  this.handlePassword = this.handlePassword.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleEmail(e) {
    this.setState({
      email: e.nativeEvent.text
    });
  }
  handlePassword(e) {
    this.setState({
      password: e.nativeEvent.text
    });
  }
  handleSubmit() {
    //need to change to local ip address
    fetch("http://192.168.1.207:3000/auth/login", {
      credentials: 'include',
      method: "post",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      })
    })
    .then (response => {
      if(response.ok) {
        this.props.navigation.navigate("Main", {screen:"home"})
      }
      else {
        throw new Error('something went wrong')
      }
    })
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>

        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source ={ require('../assets/images/logo-white.png')}
          />
        </View>
        
         <TextInput
            placeholder= "Email"
            placeholderTextColor='rgba(255,255,255,0.8)'
            returnKeyType="next"
            onSubmitEditing={()=> this.passwordInput.focus()}
            keyboardType="email-address"
            autoCapitalize="none"
            style={styles.input}
            onChange={this.handleEmail}
         />

         <TextInput
            placeholder= "Password"
            placeholderTextColor='rgba(255,255,255,0.8)'
            secureTextEntry
            returnKeyType="send"
            ref={(input) => this.passwordInput = input}
            style={styles.input}
            onChange={this.handlePassword}
         />

        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={this.handleSubmit}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <View style = {styles.signupTextCont}>
         <Text style = {styles.signupText}> Don't have an account yet?  </Text>
         <TouchableOpacity
          style={styles.buttons}
          onPress={() => navigate("SignUp", {screen: "SignUpScreen"})}>

            <Text style={styles.buttonText}>Sign Up</Text>
         </TouchableOpacity>
        </View>

      </KeyboardAvoidingView>

    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#de5a41',
    justifyContent:'center',
    alignItems:'center',
    padding: 20
  },
  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent:'center'
  },
  logo:{
    width: 175,
    height: 175
  },
  input:{
    width:300,
    height: 50,
    backgroundColor: 'rgba(255,255,255,0.3)',
    marginBottom:20,
    borderRadius: 25,
    color: '#FFF',
    paddingHorizontal:16
  },

  buttonContainer: {
    backgroundColor: '#ef8369' ,
    paddingVertical:15,
    width:300,
    borderRadius: 25,
  } ,
  buttonText:{
    textAlign:'center',
    color: '#FFFFFF',
    fontWeight:'700'

  },

  signupTextCont: {
    alignItems: 'center',
    paddingVertical:40,

  },
  signupText: {
  color: 'rgba(255,255,255,0.8)',
  fontSize: 16
  }
});
