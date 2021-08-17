import { StyleSheet } from "react-native";

const globalstyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 0,
        margin: 0,
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: "100%",
    },
    Image: {
        alignSelf: 'center',
        height: 155,
        width: 300,
        marginTop: "48%",
    },
    boton1: {
        marginTop: "46%",
        alignSelf: 'center',
        backgroundColor: '#00c1c1',
        borderRadius: 25,
        padding: 12,
        paddingRight: 36,
        paddingLeft: 36,
        margin: 10
    },
    text1: {
        color: '#dfe3f2',
        fontSize: 17,
        // fontFamily: 'poppins-bold',
    },
    boton2: {
        alignSelf: 'center',
        backgroundColor: '#dfe3f2',
        borderRadius: 25,
        padding: 12,
        paddingRight: 44,
        paddingLeft: 44,
        margin: 10
    },
    text2: {
        color: '#00c1c1',
        fontSize: 17,
        // fontFamily: 'poppins-bold',
    },
    Image2: {
        alignSelf: 'center',
        height: 48,
        width: 250,
        marginTop: 30,
    },
    back: {
        height: 40,
        width: 40,
    },
    backpress:{
        height: 40,
        width: 40,
        right: 140,
        bottom: 40,
    },
      menu: {
        position: 'relative',
        left: 140,
        bottom: 80,
        height: 40,
        width: 40,
    },
    textinicio:{
        fontSize: 32,
        bottom: 50,
    },
    userphoto:{
        height: 110,
        width: 110,
        bottom: 30,
    },
    textSoy:{
        fontSize: 28,
        bottom: 20,
        color: '#00c1c1',
    },
    dropdown:{
        width: 320, 
        height: 70,
    },
    textemail:{
        backgroundColor: '#dfe3f2',
        width: 320,
        height: 50,
        borderRadius: 50,
        marginBottom: 15,
        padding: 13,
    },
    Checkstyles:{
        // backgroundColor:'none',
    },
    botonlog:{
        alignSelf: 'center',
        backgroundColor: '#00c1c1',
        borderRadius: 25,
        padding: 12,
        paddingRight: 36,
        paddingLeft: 36,
        margin: 30,
        marginBottom: 60,
    },
    logocolor:{
        width: 140,
        height: 30,
        padding: 0,
    },
    containerhomeheder:{
        backgroundColor: '#4f59c9',
        alignItems: 'center',
        paddingTop: 100,
        paddingBottom: 10,
        margin: 0,
        justifyContent: 'center',
        marginBottom: 30,
    },
    texthome:{
        bottom: 20,
        fontSize: 32,
        color: 'white',
    },
    containerhome:{
        alignItems: 'center',
        justifyContent: 'center',
        margin: 0,
        padding: 0,
    },
    datahomeimg:{
        width: 70,
        height: 70,
    },
    datahometouch:{
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#dfe3f2',
        margin: 10,
        width: 300,
    },
    datahometext:{
        fontSize: 16,
        paddingTop: 23,
    },
    containerhomefoot:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 0,
        padding: 0,
    },
});

export default globalstyles