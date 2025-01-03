import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface ImageProp {
    url : string,
    name : string
}

export default function ImageCard({url, name} : ImageProp ){
    return (
        <View style={styles.card}>
            <Image style={styles.image} source={{ uri: url }} />
            <View style={styles.labelContainer}>
                <Text style={styles.text}>{name}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card : {
        width  : 187,
        marginBottom : 10,
    },
    image : {
        height : 300,
        borderRadius : 15
    },
    text : {
        color : "white",
        marginLeft : 10,
        marginTop : 5,
        fontSize : 20,
        fontWeight : "500",
    },
    labelContainer : {
        backgroundColor : "rgba(0,0,0,0.5)",
        // backgroundColor : "red",
        position : "absolute",
        bottom : 0,
        borderBottomEndRadius : 20,
        borderStartEndRadius : 20,
        width : "100%",
        height : 40
    }
})