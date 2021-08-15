import { StyleSheet, Text, View, Image ,TouchableOpacity, Alert,Button } from 'react-native';
import React from 'react';

function Login({ navigation }) {

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Go to Login"
        onPress={() => navigation.navigate('Home')}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  ); 
}

const styles = StyleSheet.create({

});

export default Login;
