import { LinearGradient } from 'expo-linear-gradient';
import React, { useEffect, useState, } from 'react';
import { StyleSheet, Text, View, Image ,TouchableOpacity } from 'react-native';
// import * as Font from 'expo-font';
import logo from '../img/logo.png'
import footer from '../img/logo-blanco-mercadatos.png'

export default function Welcome({ navigation }) {

  // const [frontsLoaded, setFontsLoaded] = useState(false);

  // useEffect(() => {
  //   if(!frontsLoaded){
  //     loadFonts();
  //   }
  // });

  // const loadFonts = async ()=>{
  //   await Font.loadAsync({
  //     'poppins-bold' : require('./assets/fonts/Poppins-Bold.ttf'),
  //     'poppins-regular' : require('./assets/fonts/Poppins-Regular.ttf'),
  //   });
  //   setFontsLoaded(true)
  // }
  
  return (
    <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={['#4f59c9', '#6622a9']}
        style={styles.background}>
          <Image
          source={logo}
          style={styles.Image}
          />
          <TouchableOpacity
          onPress={() => navigation.navigate('Login')}
          style={styles.boton1}
          >
            <Text
            style={styles.text1}
            >Inicia sesíon</Text>
          </TouchableOpacity>
          <TouchableOpacity
          style={styles.boton2}
          >
            <Text
            style={styles.text2}
            >Regístrate</Text>
          </TouchableOpacity>
          <Image
          source={footer}
          style={styles.Image2}
          />
        </LinearGradient>
    </View>
  ); 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
  },
  Image:{
    alignSelf: 'center',
    height:155,
    width: 300,
    marginTop: "48%",
  },
  boton1:{
    marginTop: "46%",
    alignSelf: 'center',
    backgroundColor: '#00c1c1',
    borderRadius: 25,
    padding: 12,
    paddingRight:36,
    paddingLeft:36,
    margin: 10
  },
  text1:{
    color:'#dfe3f2',
    fontSize: 17,
    // fontFamily: 'poppins-bold',
  },
  boton2:{
    alignSelf: 'center',
    backgroundColor: '#dfe3f2',
    borderRadius: 25,
    padding: 12,
    paddingRight:44,
    paddingLeft:44,
    margin: 10
  },
  text2:{
    color:'#00c1c1',
    fontSize: 17,
    // fontFamily: 'poppins-bold',
  },
  Image2:{
    alignSelf: 'center',
    height: 48,
    width: 250,
    marginTop: 30,
  }
});
