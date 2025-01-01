import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function AccountsInfo(){
    return (
        <View style={styles.container}>
            <Text>This is accounts info page</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        padding : 10
    }
})