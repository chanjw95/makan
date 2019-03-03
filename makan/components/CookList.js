import React , {Component} from "react";
import { AppRegistry, FlatList, StyleSheet, TouchableOpacity, Image, Dimensions, Text, View } from "react-native"; 

import CookListData from './Data/CookData';

class CookListItem extends Component {
  render() {
    return(

       <View behavior="padding" style={styles.container}>
        
           <TouchableOpacity style={styles.buttonContainer}>
               
                <Image
                style={styles.logo}
                source ={ require('../assets/images/Example.jpg')}
                  />
                   <View style = {{flex:1,  }}>
                      <Text style={styles.RestaurantNameText}> {"\n"}{this.props.item.name} </Text>
                      <Text style={styles.RestaurantDetailsText}>{this.props.item.foodType}{"\n"} 
                                                                  {this.props.item.rating}{"\n"}</Text>
                   </View>
          </TouchableOpacity>


      </View>
    
      );
  }
}
const styles = StyleSheet.create({
   container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#FFFFFF',
    justifyContent:'center',
    alignItems:'center'
  },    
  buttonContainer: {
    backgroundColor: '#FFFFFF' ,
    width:Dimensions.get('window').width,
    flexDirection:'column',
    alignItems: 'center',
    borderBottomWidth: .5,

  } , 
   logo:{        
    justifyContent: 'center' ,
    alignItems: 'center',
    width: Dimensions.get('window').width -20,
    height: 160,  
  }, 
   RestaurantNameText:{
    textAlign:'left',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16
    },
  RestaurantDetailsText:{
    textAlign:'left',

  color: 'rgba(0,0,0,0.4)'
    },
  });

export default class BasicFLatList extends Component {
  render () {
    return(
      <View style = {{flex:1, marginTop:22}}>
        <FlatList
        data = {CookListData}
        renderItem = {({item, index})=>{
        return (<CookListItem item={item} index= {index}> </CookListItem>);
        
      }}>
        </FlatList>
      </View>
      );
  }
}
