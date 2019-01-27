import React from 'react';
import { Icon } from 'expo';
import {
  Platform,
  Text,
  Button,
} from 'react-native';

import { StackNavigator } from 'react-navigation';

export default class IOSBackButton extends React.Component {
  <Button title = "Back" onClick={() => this.props.navigation.goBack()} />
}
