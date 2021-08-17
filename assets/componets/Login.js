import { Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import React, { useState } from "react";
import DropDownPicker from 'react-native-dropdown-picker'
import { CheckBox } from 'react-native-elements'
import globalstyles from '../styles/global'
import back from '../img/14.png';
import menu from '../img/15.png';
import img_user from '../img/11.png';
import logocolor from '../img/Logo-mercadatos.png'


function Login({ navigation }) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: 'Clientes', value: 'cl' },
    { label: 'Equipo y provedores', value: 'eq' }
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
        Inicia sesión
      </Text>
      <Image
        source={img_user}
        style={globalstyles.userphoto}
      />
      <Text
      style={globalstyles.textSoy}>
        Soy
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
      <TextInput
        style={globalstyles.textemail}
        placeholder='Correo electrónico'
      />
      <TextInput
        style={globalstyles.textemail}
        placeholder="Contraseña"
        secureTextEntry={true}
      />
      <CheckBox
        title="Recordar mis datos"
        checked={checked}
        containerStyle={globalstyles.Checkstyles}
        onPress={() => toggleChecked(!checked)}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        style={globalstyles.botonlog}
      >
        <Text
          style={globalstyles.text1}
        >Inicia sesíon</Text>
      </TouchableOpacity>
      <Image
        source={logocolor}
        style={globalstyles.logocolor}
      />
    </View>
  );
}

export default Login;
