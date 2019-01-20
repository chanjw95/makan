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
      <ScrollView style={styles.container}>
        <Button
          title="Customer"
          onPress={() => navigate("CustLogin", {screen: "CustomerLoginScreen"})}
          color="red"
        />
        <Button
          title="Cook"
          onPress={() => navigate("CookLogin", {screen: "CookLoginScreen"})}
          color="green"
        />
        <Button
          title="Kitchen"
          onPress={() => navigate("KitchenLogin", {screen: "KitchenLoginScreen"})}
          color="blue"
        />
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
});
