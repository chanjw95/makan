import React from 'react';
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { WebBrowser } from 'expo';
import { ExpoLinksView } from '@expo/samples';
import { MonoText } from '../components/StyledText';

export default class LoginScreen extends React.Component {
  static navigationOptions = {
   header: null
  };
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
            placeholder= "Username or Email"
            placeholderTextColor='rgba(255,255,255,0.8)'
            returnKeyType="next"
            onSubmitEditing={()=> this.passwordInput.focus()}
            keyboardType="email-address"
            autoCapitalize="none"
            style={styles.input}
         />

         <TextInput
            placeholder= "Password"
            placeholderTextColor='rgba(255,255,255,0.8)'
            secureTextEntry
            returnKeyType="send"
            ref={(input) => this.passwordInput = input}
            style={styles.input}
         />

        <TouchableOpacity style={styles.buttonContainer}>
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
    backgroundColor: '#FF420E',
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
    backgroundColor: '#FF8C00' ,
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
