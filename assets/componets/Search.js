import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import globalstyles from '../styles/global'
import React, { useState } from "react";
import DropDownPicker from 'react-native-dropdown-picker'
import back from '../img/14.png';
import menu from '../img/15.png';
import img12 from '../img/12.png'
import logocolor from '../img/Logo-mercadatos.png'

function Search({ navigation }) {

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: 'Palabras claves', value: 'pc' },
    { label: 'Avanzado', value: 'Av' }
  ]);
  const [checked, toggleChecked] = useState(false);

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
        Consultas
      </Text>
      <Image
        source={img12}
        style={globalstyles.userphoto}
      />
      <Text
      style={globalstyles.textSoy}>
        Tipo de consultas 
      </Text>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        placeholder="Seleccionar"
        containerStyle={globalstyles.dropdown}
      />
      <LinearGradient
        // Background Linear Gradient
        colors={['#4f59c9', '#6622a9']} style={globalstyles.Imputgradient}>
          <Image
        source={img12}
        style={globalstyles.datahomeimg}
        />
         <TextInput
        style={globalstyles.textImputgradient}
        placeholder="Lorem ipsum"
        placeholderTextColor='white'
      />
      </LinearGradient>
      <TouchableOpacity
        onPress={() => navigation.navigate('Result')}
        style={globalstyles.botonlog}
      >
        <Text
          style={globalstyles.text1}
        >Buscar</Text>
      </TouchableOpacity>
      <Image
        source={logocolor}
        style={globalstyles.logocolor}
      />
    </View>
  ); 
}

const styles = StyleSheet.create({

});

export default Search;
