import { Text, View, Image, TouchableOpacity, Linking} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import React from "react";
import globalstyles from '../styles/global'
import back from '../img/17.png'
import menu from '../img/13.png'
import img1 from '../img/1.png'
import img2 from '../img/2.png'
import img3 from '../img/3.png'
import img4 from '../img/4.png'
import img5 from '../img/5.png'
import img7 from '../img/7.png'
import img8 from '../img/8.png'
import img9 from '../img/9.png'
import img10 from '../img/10.png'

function Home({ navigation }) {

  return (
    <View>
      <LinearGradient
        // Background Linear Gradient
        colors={['#4f59c9', '#6622a9']} style={globalstyles.containerhomeheder}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={globalstyles.backpress}
        >
          <Image
            source={back}
            style={globalstyles.back}
          />
        </TouchableOpacity>
        <Image
          source={menu}
          style={globalstyles.menu}
        />
        <Text
          style={globalstyles.texthome}
        >
          ¡Bienvenido!
        </Text>
      </LinearGradient>
      <View style={globalstyles.containerhome}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={globalstyles.datahometouch}
        >
          <Image
            source={img1}
            style={globalstyles.datahomeimg}
          />
          <Text
            style={globalstyles.datahometext}
          >¿Quienes Somos?</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={globalstyles.datahometouch}
        >
          <Image
            source={img2}
            style={globalstyles.datahomeimg}
          />
          <Text
            style={globalstyles.datahometext}
          >Actualidad/ Noticias</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={globalstyles.datahometouch}
        >
          <Image
            source={img3}
            style={globalstyles.datahomeimg}
          />
          <Text
            style={globalstyles.datahometext}
          >Opinióm y RSE</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Search')}
          style={globalstyles.datahometouch}
        >
          <Image
            source={img4}
            style={globalstyles.datahomeimg}
          />
          <Text
            style={globalstyles.datahometext}
          >Consultas</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={globalstyles.datahometouch}
        >
          <Image
            source={img5}
            style={globalstyles.datahomeimg}
          />
          <Text
            style={globalstyles.datahometext}
          >Contáctenos</Text>
        </TouchableOpacity>
      </View>
      <View style={globalstyles.containerhomefoot}>
        <TouchableOpacity
          onPress={() => { Linking.openURL('https://twitter.com/mercadatos_')}}
          style={globalstyles.ergf}
        >
          <Image
            source={img7}
            style={globalstyles.datahomeimg}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => { Linking.openURL('https://www.facebook.com/Mercadatos-SA-100409998466408')}}
          style={globalstyles.datahetouch}
        >
          <Image
            source={img8}
            style={globalstyles.datahomeimg}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => { Linking.openURL('https://www.instagram.com/mercadatos_/')}}
          style={globalstyles.datometouch}
        >
          <Image
            source={img9}
            style={globalstyles.datahomeimg}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => { Linking.openURL('https://co.linkedin.com/company/mercadatos-s-a')}}
          style={globalstyles.touch}
        >
          <Image
            source={img10}
            style={globalstyles.datahomeimg}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Home;
