import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        backgroundColor: "white",
        margin: 10,
        padding: 4,
        borderRadius: 10,
    },
    image: {
        height: Dimensions.get('window').height / 4,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,

    },
    title: {
        paddingTop: 7,
        fontWeight: 'bold',
    },
    description: {
        paddingTop: 5,
        textAlign: 'center',
    },
    author: {
        paddingTop:10,
        paddingRight:5,
        textAlign:'right',
        fontWeight: 'bold',
    },
});