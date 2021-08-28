import { Text, View, Image ,TouchableOpacity, Alert,Button } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import globalstyles from '../styles/global'
import back from '../img/17.png';

function Viewdata({ navigation }) {

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
        <Text
          style={globalstyles.texthome}
        >
          ABC_2021_0220
        </Text>
      </LinearGradient>
      <View style={globalstyles.containerhome}>
      <Text
          style={globalstyles.textinfo}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </Text>
      </View>
    </View>
  );
}

export default Viewdata;