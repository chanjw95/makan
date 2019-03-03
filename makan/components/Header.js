import React from "react";
import { Text, Image,Dimensions } from "react-native";
import { Header, } from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";

import styles from './HeaderStyles';

export class MainHeader extends React.Component {
    render() {
      console.log(this.props);
    
  return (
    <Header style={styles.container}>
       <Text> {this.props.name} </Text>
    </Header>
  );
}
}
 
export default MainHeader;