import React from 'react';
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Dimensions,
  KeyboardAvoidingView
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { WebBrowser } from 'expo';
import { ExpoLinksView } from '@expo/samples';
import { MonoText } from '../components/StyledText';

export default class CustomerSupport extends React.Component {
 static navigationOptions = {
    title: 'CustomerSupport',
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
 
   
      <View style = {styles.textBox}>
         <TextInput
            placeholder= "Type Message Here..."
            placeholderTextColor='rgba(0,0,0,0.3)'   
            returnKeyType="done"  
            multiline={true}
            blurOnSubmit= {true}
          style={styles.input}
         />
      </View>
          <View style = {styles.buttonContainer }>
           
        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText} >Submit</Text>
        </TouchableOpacity>

      </View>
      </KeyboardAvoidingView>

    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: .8,
    paddingTop: 40, 
    padding: 40,
    justifyContent:'center',
    alignItems:'center',
  },
   input:{
      width:Dimensions.get('window').width*.8,  
       height:Dimensions.get('window').height *.3, 
    marginBottom:20, 
    color: '#000000', 
    padding: 20,
     paddingTop: 15
 
  },
    textBox:{
    borderBottomWidth: 1 ,
    borderWidth: .8,
       height:Dimensions.get('window').height *.3, 
     paddingTop: 15 ,
     backgroundColor  : 'rgba(220,220,220,0.5)',

    borderRadius: 15,
  },
    buttonText:{
    textAlign:'center',
    color: '#000000',
    fontWeight:'700', 
  },
  button: {

    borderRadius: 25,
    backgroundColor: '#fff' ,
    paddingVertical:15,
    width:Dimensions.get('window').width*.8,
    borderWidth: .5, 
    backgroundColor: '#FF8C00' ,
  } ,
  buttonContainer : { 
    paddingTop: 50,
  } ,

});
 