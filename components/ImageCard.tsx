import { Image, StyleSheet, Text, View } from "react-native";

interface ImageProp {
    url : string,
    name : string
}

export default function ImageCard({url, name} : ImageProp ){
    return (
        <View style={styles.card}>
            <Image style={styles.image} source={{uri : url}} />
            <Text style={styles.text}>{name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    card : {
        width  : 170,
        marginBottom : 30
    },
    image : {
        height : 300,
        borderRadius : 20
    },
    text : {
        color : "white",
        marginLeft : 10,
        marginTop : 5,
        fontSize : 20,
        fontWeight : "300",
    }
})