import React, { Component } from 'react';
import { ScrollView,View, Text,StyleSheet } from 'react-native';
import SettingsList from 'react-native-settings-list';
import { StackNavigator } from "react-navigation";

import AccountInformation from './AccountInformation';

class SettingsMenu extends React.Component {


render() { 
 
  return (
    <View style={{backgroundColor:'#EFEFF4',flex:1}}>

      <View style={{backgroundColor:'#EFEFF4',flex:1}}>
        <SettingsList borderColor='#c8c7cc' defaultItemSize={50}>
          <SettingsList.Header headerStyle={{marginTop:15}}/>

          <SettingsList.Item 
            title='Account Information'
            titleInfo=''
            titleInfoStyle={styles.titleInfoStyle}

          onPress={() => navigate("SignUp", {screen: "SignUpScreen"})} 
          />
          <SettingsList.Item 
            title='Payment Cards'
            titleInfo='Off'
            titleInfoStyle={styles.titleInfoStyle}
            onPress={() => Alert.alert('Route to Blutooth Page')}
          />
          <SettingsList.Item 
            title='Addresses'
            onPress={() => Alert.alert('Route To Cellular Page')}
          />
          <SettingsList.Item 
            title='Customer Support'
            titleInfo='Off'
            titleInfoStyle={styles.titleInfoStyle}
            onPress={() => Alert.alert('Route To Hotspot Page')}
          />
          <SettingsList.Header headerStyle={{marginTop:15}}/>
          <SettingsList.Item 
            title='Notifications'
            onPress={() => Alert.alert('Route To Notifications Page')}
          />
     

        </SettingsList>
      </View>
    </View>
  );
}



} 
 const styles = StyleSheet.create({
  imageStyle:{
    marginLeft:15,
    marginRight:20,
    alignSelf:'center',
    width:20,
    height:24,
    justifyContent:'center'
  }
});

export default SettingsMenu;