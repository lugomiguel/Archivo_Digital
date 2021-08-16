import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import logo from '../img/logo.png'
import footer from '../img/logo-blanco-mercadatos.png'
import globalstyles from '../styles/global'

export default function Welcome({ navigation }) {

  return (
    <View style={globalstyles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={['#4f59c9', '#6622a9']}
        style={globalstyles.background}>
        <Image
          source={logo}
          style={globalstyles.Image}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}
          style={globalstyles.boton1}
        >
          <Text
            style={globalstyles.text1}
          >Inicia sesíon</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={globalstyles.boton2}
        >
          <Text
            style={globalstyles.text2}
          >Regístrate</Text>
        </TouchableOpacity>
        <Image
          source={footer}
          style={globalstyles.Image2}
        />
      </LinearGradient>
    </View>
  );
}

