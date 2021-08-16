import { Text, View, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import React, { useState } from "react";
import DropDownPicker from 'react-native-dropdown-picker'
import { CheckBox } from 'react-native-elements'
import globalstyles from '../styles/global'
import img_user from '../img/11.png';
import back from '../img/14.png';
import menu from '../img/15.png';


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
        style={globalstyles.back}
      >
        <Image
          source={back}
          style={globalstyles.back}
        />
      </TouchableOpacity>
      <Image
        source={menu}
        style={globalstyles.back}
      />
      <Text>
        Inicia sesión
      </Text>
      <Image
        source={img_user}
        style={globalstyles.back}
      />
      <Text>
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
        containerStyle={{ height: 200, margin: 2 }}
      />
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1
        }}
        defaultValue="Correo electrónico"
      />
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1
        }}
        defaultValue="Contraseña"
      />
      <CheckBox
        title="My Checkbox"
        checked={checked}
        onPress={() => toggleChecked(!checked)}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        style={globalstyles.boton1}
      >
        <Text
          style={globalstyles.text1}
        >Inicia sesíon</Text>
      </TouchableOpacity>
      {/* <Image
        source={img_user}
      // style={}
      /> */}
    </View>
  );
}

export default Login;
