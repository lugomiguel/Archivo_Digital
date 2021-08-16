import { StyleSheet } from "react-native";

const globalstyles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    background: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      height: "100%",
    },
    Image:{
      alignSelf: 'center',
      height:155,
      width: 300,
      marginTop: "48%",
    },
    boton1:{
      marginTop: "46%",
      alignSelf: 'center',
      backgroundColor: '#00c1c1',
      borderRadius: 25,
      padding: 12,
      paddingRight:36,
      paddingLeft:36,
      margin: 10
    },
    text1:{
      color:'#dfe3f2',
      fontSize: 17,
      // fontFamily: 'poppins-bold',
    },
    boton2:{
      alignSelf: 'center',
      backgroundColor: '#dfe3f2',
      borderRadius: 25,
      padding: 12,
      paddingRight:44,
      paddingLeft:44,
      margin: 10
    },
    text2:{
      color:'#00c1c1',
      fontSize: 17,
      // fontFamily: 'poppins-bold',
    },
    Image2:{
      alignSelf: 'center',
      height: 48,
      width: 250,
      marginTop: 30,
    },
    back:{
        alignSelf: 'center',
        height: 250,
        width: 250,
        marginTop: 30,
      }
  });

  export default globalstyles