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

export default class AccountInformation extends React.Component {
 static navigationOptions = {
    title: 'Account Information',
    headerStyle: {
      backgroundColor: '#FF5E3A',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };


  render() { 
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
 
 	  <TextInput
            placeholder= "First Name"
            placeholderTextColor='#000000' 
            TextColor='#000000' 
            returnKeyType="next"
            onSubmitEditing={()=> this.passwordInput.focus()}
            keyboardType="email-address"
            autoCapitalize="none"
            style={styles.input}
         />

         <TextInput
            placeholder= "Last Name"
            placeholderTextColor='#000000'  
            returnKeyType="send"
            ref={(input) => this.passwordInput = input}
            style={styles.input}
         />
          <TextInput
            placeholder= "Phone Number"
            placeholderTextColor='#000000'   
            returnKeyType="send"
            ref={(input) => this.passwordInput = input}
            style={styles.input}
         />
     	 <TextInput
            placeholder= "Email"
            placeholderTextColor='#000000' 
            returnKeyType="send"
            ref={(input) => this.passwordInput = input}
            style={styles.input}
         />
 
          <View style = {styles.signupTextCont}>
            <TouchableOpacity
          style={styles.buttons} >

          <Text style={styles.buttonText}>Change Password</Text>

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
    justifyContent:'center',
    alignItems:'center',
    padding: 20
  },
   input:{
    width:300,
    height: 50,
    backgroundColor: '#FFFFFF',
    marginBottom:20, 
    borderBottomWidth: .5,
    color: '#000000',
    paddingHorizontal:16
  },
    buttonText:{
    textAlign:'center',
    color: '#000000',
    fontWeight:'700'

  },

});
