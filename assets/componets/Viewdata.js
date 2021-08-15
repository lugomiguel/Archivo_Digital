import { StyleSheet, Text, View, Image ,TouchableOpacity, Alert,Button } from 'react-native';
import React from 'react';

function Viewdata({ navigation }) {

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="END Viewdata" onPress={() => navigation.goBack()} />
    </View>
  ); 
}

const styles = StyleSheet.create({

});

export default Viewdata;
