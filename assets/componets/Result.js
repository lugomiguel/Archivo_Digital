import { StyleSheet, Text, View, Image ,TouchableOpacity, Alert,Button } from 'react-native';
import React from 'react';
import globalstyles from '../styles/global'
import back from '../img/14.png';
import menu from '../img/15.png';
import img12 from '../img/12.png'
import img6 from '../img/6.png'
import logocolor from '../img/Logo-mercadatos.png'

function Result({ navigation }) {

  return (
    <View style={globalstyles.container}>
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
        style={globalstyles.textinicio}>
        Resultados
      </Text>
      <Image
        source={img12}
        style={globalstyles.imgResult}
      />
      <TouchableOpacity
          onPress={() => navigation.navigate('Viewdata')}
          style={globalstyles.datahometouch}
        >
          <Image
            source={img6}
            style={globalstyles.datahomeimg}
          />
          <Text
            style={globalstyles.datahometext}
          >ABC_2021_0220</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={globalstyles.datahometouch}
        >
          <Image
            source={img6}
            style={globalstyles.datahomeimg}
          />
          <Text
            style={globalstyles.datahometext}
          >ABC_1090_2022</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={globalstyles.datahometouch}
        >
          <Image
            source={img6}
            style={globalstyles.datahomeimg}
          />
          <Text
            style={globalstyles.datahometext}
          >CDE_2021_0221</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={globalstyles.datahometouch}
        >
          <Image
            source={img6}
            style={globalstyles.datahomeimg}
          />
          <Text
            style={globalstyles.datahometext}
          >CDE_2011_0320</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={globalstyles.datahometouch}
        >
          <Image
            source={img6}
            style={globalstyles.datahomeimg}
          />
          <Text
            style={globalstyles.datahometext}
          >EFG_2013_0210</Text>
        </TouchableOpacity>
        <Image
        source={logocolor}
        style={globalstyles.logocolor}
      />
    </View>
  ); 
}

export default Result;

