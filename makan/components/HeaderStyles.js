
import { Text, Image,Dimensions , StyleSheet} from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor:"#FF5E3A",
    justifyContent:'center',
    width: Dimensions.get('window').width
  },  
titleText:{

    paddingVertical:10,
    textAlign:'center',
      fontWeight: 'bold', 
    color: '#FFFFFF',
}
});
  export default styles;

 