import { StyleSheet, Text, View, Image ,TouchableOpacity, Alert,Button } from 'react-native';
import React from "react";


function Home({ navigation }) {
  
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() =>  navigation.goBack()}
      // style={}
      >
      <Text>
        Atras
      </Text>
      {/* <Image
        source={img_user}
      // style={}
      /> */}
      </TouchableOpacity>
      {/* <Image
        source={img_user}
      // style={}
      /> */}
      <Text>
        !Bienvenido¡
      </Text>
      <TouchableOpacity
        onPress={() =>  navigation.goBack()}
      // style={}
      >
      {/* <Image
        source={img_user}
      // style={}
      /> */}
      <Text>¿Quienes Somos?</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>  navigation.goBack()}
      // style={}
      >
      {/* <Image
        source={img_user}
      // style={}
      /> */}
      <Text>Actualidad/ Noticias</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>  navigation.goBack()}
      // style={}
      >
      {/* <Image
        source={img_user}
      // style={}
      /> */}
      <Text>Opinióm y RSE</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Search') }
      // style={}
      >
      {/* <Image
        source={img_user}
      // style={}
      /> */}
      <Text>Consultas</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
      // style={}
      >
      {/* <Image
        source={img_user}
      // style={}
      /> */}
      <Text>Contáctenos</Text>
      </TouchableOpacity>
    </View>
  ); 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default Home;
