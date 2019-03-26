import React from 'react';
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Dimensions ,
  ScrollView,
  FlatList,
  KeyboardAvoidingView
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { WebBrowser } from 'expo';
import { ExpoLinksView } from '@expo/samples';
import { MonoText } from '../components/StyledText'; 
import {  createBottomTabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Akira } from 'react-native-textinput-effects';

import CookListItem from '../components/CookList'; 
import SearchListItem from '../components/SearchList';
import SettingsMenu from '../components/SettingsMenu';
import MainHeader from '../components/Header'; 
 
export class Home extends React.Component {
  render() {
    const HeaderTitle = { 
      Home: "Main Page Screen", 
      }
    const {navigate} = this.props.navigation;
    return (

    <View style={{flex: 1 }}>
        <MainHeader name={HeaderTitle.Home}/>
        <CookListItem style={{ height:Dimensions.get('window').height -60 }}/>
       <Text>{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}</Text>
   </View>
    );
  };
}

export class Search extends React.Component {
  render() {
     const HeaderTitle = { 
      Search: "Search" 
      }
    const {navigate} = this.props.navigation;
    return (

    <View style={{flex: 1 }}>

        <MainHeader name={HeaderTitle.Search}/>
         <Text></Text>
        <Akira
    label={'Search'}
    
    borderColor={'#a5d1cc'}
    inputPadding={16}
    labelHeight={24}
    labelStyle={{ color: '#ac83c4' }}
  />
           <SearchListItem style={{ height:Dimensions.get('window').height -60 }}/>
       <Text>{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}</Text>
 
      
       
         
   
      </View>
    );
  };
}

export class Settings extends React.Component {
  render() {
     const HeaderTitle = { 
      Settings: "Settings Screen"
      }
    const {navigate} = this.props.navigation;
    return (

    <View style={{flex: 1 }}>
        <MainHeader name={HeaderTitle.Settings}/>
       <SettingsMenu  />
      </View>
    );
  };
}

export default createBottomTabNavigator(
{
Home: Home,
Search: Search,
Settings:Settings
},
{
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-home`;
 
        } else if (routeName === 'Search') {
          iconName = `ios-search`;
        } 
        else if (routeName === 'Settings') {
          iconName = `ios-settings`;
        } 
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray', 
      style: {
      backgroundColor: 'rgba(0, 0, 0, 1)',
      borderTopWidth: 3,
      borderTopColor: '#000000',
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
    height: 60,
    }
    },
    
  }
);
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#FFFFFF',
    justifyContent:'center',
    alignItems:'center',
    padding: 20
  },  
   
  standardText: {
  color: 'rgba(0,0,0,0.8)',
  fontSize: 16
  }
});
