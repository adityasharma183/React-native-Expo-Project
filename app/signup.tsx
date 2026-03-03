import { Text, View,StyleSheet } from "react-native";
import { Link, useRouter } from "expo-router";
import Button from "./components/Button";

const  Signup=() =>{
  const router=useRouter()
  const handleSignup=()=>{
    router.navigate('/login')
    
  }
  return (
    
    <View style={styles.container}>
      
      <Button title={'Login'} onPress={handleSignup}/>
      
    </View>
  );
}

const styles=StyleSheet.create({
  container:{
    flex:1

  },
  text:{
    fontSize:20,
    fontWeight:'bold',

  }

})

export default Signup
