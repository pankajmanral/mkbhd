import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Accounts(){
    return (
        <View style={styles.container}>
            <Text>This is accounts page</Text>
            <Link href={'/accountinfo'}>
                <Text style={{color:'blue'}}>Go to accounts info page</Text>
            </Link>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        padding : 10,
    }
})