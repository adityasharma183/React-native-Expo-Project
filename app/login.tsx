import { Text, View,StyleSheet,Image, TextInput } from "react-native";
import { Link, useRouter } from "expo-router";
import Button from "./components/Button";


const  Login=() =>{
  const router=useRouter()
  const handleLogin=()=>{
    router.navigate('/signup')
    
  }
  return (
    
    <View style={styles.container}>

        <Image source={require("@/assets/images/login.png")} style={{width:'100%',height:400}}/>


        <View style={{padding:20,gap:20}}>


        <TextInput placeholder="Enter your email" style={{borderWidth:1,height:50,paddingHorizontal:25}}/>
         <TextInput placeholder="Enter your password" style={{borderWidth:1,height:50,paddingHorizontal:25}}/>
      
      <Button  title={'Login'} onPress={handleLogin}/>


        </View>


      
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
    flex:1,
    alignItems:'center'

  }

})

export default Login
