import { Text, View,StyleSheet } from "react-native";
import { Link } from "expo-router";

const  Index=() =>{
  return (
    <View style={styles.container}>
      <Text style={styles.text}>adi here</Text>
      <Link href={'/about'}>Go to about</Link>

    </View>
  );
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'yellow'

  },
  text:{
    fontSize:20,
    fontWeight:'bold',

  }

})

export default Index


