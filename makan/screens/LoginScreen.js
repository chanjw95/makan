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
   header: null
   /* title: '',
    headerStyle: {
      backgroundColor: '#E74C3C'
    },
    */
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <ScrollView style={styles.container}>
      <View style={styles.logoContainer}>
      <Image  
        style={styles.logo}
        source ={ require('../assets/images/logo-white.png')} 
        />
     </View> 
     
     <View style={styles.buttons} >
        <Button
          title="Customer Login"
          onPress={() => navigate("CustLogin", {screen: "CustomerLoginScreen"})}
          color="white"
          
        />
        </View>
        <View style={styles.buttons} >
        <Button
          title="Cook Login"
          onPress={() => navigate("CookLogin", {screen: "CookLoginScreen"})}
          color="white" 
        />
        </View>
        <View style={styles.buttons} >
        <Button

          title="Kitchen Login"
          onPress={() => navigate("KitchenLogin", {screen: "KitchenLoginScreen"})}
          color="white" 
        />
        </View>
      
       <View style = {styles.signupTextCont}>
         <Text style = {styles.signupText}> Don't have an account yet?  </Text>
          <Button 
          title="SignUp"
          onPress={() => navigate("SignUp", {screen: "SignUpScreen"})}
          color="white"  
        />

       </View> 
      </ScrollView>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#FF420E',
    justifyContent:'center'
  },
  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent:'center',
    paddingVertical:75 
  },
  logo:{  
    width: 150,
    height: 150 

  },
  buttons: { 
       
    backgroundColor: '#F98866' ,
    flexGrow: 1, 
    justifyContent:'center',
    alignItems: 'center',
    marginVertical:10,
    marginHorizontal:50,
    paddingVertical:10 ,
    borderRadius: 30
  } ,
  signupTextCont: {
  flexGrow: 1, 
    alignItems: 'center',
    justifyContent:'center',
    paddingVertical:35 
     
  },
  signupText: {
  color: 'rgba(255,255,255,0.8)',
  fontSize: 16
  } 
});
