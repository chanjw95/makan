import React , {Component} from "react";
import { AppRegistry, FlatList, StyleSheet, TouchableOpacity, Image, Dimensions, Text, View } from "react-native"; 

import SearchListData from './Data/SearchData';

class SearchListItem extends Component {
  render() {
    return(

       <View behavior="padding" style={styles.container}>
        
           <TouchableOpacity style={styles.buttonContainer}>
 
                   <View style = {{flex:1,  }}>
                      <Text style={styles.SearchNameText}> {this.props.item.name} {"\n"}</Text> 
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
    alignItems:'center',
    borderBottomWidth: .5,
  },    
  buttonContainer: {
    backgroundColor: '#FFFFFF' ,
    width:Dimensions.get('window').width,
    flexDirection:'column',
    alignItems: 'center',

  } , 
   logo:{        
    justifyContent: 'center' ,
    alignItems: 'center',
    width: Dimensions.get('window').width -20,
    height: 160,  
  }, 
   SearchNameText:{
    textAlign:'left',
    color: 'black',
    paddingTop: 8,
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
        data = {SearchListData}
        renderItem = {({item, index})=>{
        return (<SearchListItem item={item} index= {index}> </SearchListItem>);
        
      }}>
        </FlatList>
      </View>
      );
  }
}
