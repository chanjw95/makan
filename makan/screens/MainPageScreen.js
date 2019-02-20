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

export default class MainPageScreen extends React.Component {
  static navigationOptions = {
   title: 'Login'
  };
  render() {
    const {navigate} = this.props.navigation;
    return (

       <KeyboardAvoidingView behavior="padding" style={styles.container}>

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
