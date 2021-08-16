import { StyleSheet, Text, View, Image, TouchableOpacity, Button, ScrollView, TextInput } from 'react-native';
import React, { useState } from "react";
import DropDownPicker from 'react-native-dropdown-picker'
import { CheckBox } from 'react-native-elements'
import img_user from '../img/11.png';

function Login({ navigation }) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: 'Clientes', value: 'cl' },
    { label: 'Equipo y provedores', value: 'eq' }
  ]);
  const [checked, toggleChecked] = useState(false);

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
      <Text>
        Inicia sesión
      </Text>
      {/* <Image
        source={img_user}
      // style={}
      /> */}
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
          // style={styles.boton1}
          >
            <Text
            // style={styles.text1}
            >Inicia sesíon</Text>
          </TouchableOpacity>       
      {/* <Image
        source={img_user}
      // style={}
      /> */}
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

export default Login;
