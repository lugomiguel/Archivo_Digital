import { StyleSheet, Text, View, Image ,TouchableOpacity, Alert,Button } from 'react-native';
import React from 'react';

function Search({ navigation }) {

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Go to Search"
        onPress={() => navigation.navigate('Result')}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  ); 
}

const styles = StyleSheet.create({

});

export default Search;
