import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    container: {
        width: Dimensions.get('window').width / 2.25,
        backgroundColor: "lightgray",
        padding: 10,
        borderRadius: 10,
        margin: 10,
    },
    image: {
        height: Dimensions.get('window').height / 6,
        borderRadius: 10,
    },
    title: {
        fontSize: 25,
        color: 'black',
        fontWeight: 'bold',
        // marginLeft: 10,
        // marginRight: 10,
    },
    price: {
        // marginLeft: 10,
        color: 'gray',
        fontSize: 21,
        marginBottom: 10,
        fontWeight: 'bold',
    }
});