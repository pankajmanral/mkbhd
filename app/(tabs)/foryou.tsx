import { Link } from "expo-router";
import { Text, View } from "react-native";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

export default function Foryou(){

    const Tab = createMaterialTopTabNavigator()

    return (
        // <View style={styles.container}>
        //     <View>
        //         <Text style={{color:'white',fontSize:25}}>This is for you page</Text>
        //         <Link href={'/(noBottomBar)/library'}>
        //             <Text style={{color:'white',fontSize:15}}>To library</Text> 
        //         </Link>
        //         <Link href={'/(noBottomBar)/liked'}>
        //             <Text style={{color:'white',fontSize:15}}>To liked</Text> 
        //         </Link>
        //         <Link href={'/(noBottomBar)/suggested'}>
        //             <Text style={{color:'white',fontSize:15}}>To suggested</Text> 
        //         </Link>
        //     </View>
        // </View>

        <View style={styles.container}>
            <Tab.Navigator style={styles.navigation}>
                <Tab.Screen name="Liked" component={LikedScreen}/>
                <Tab.Screen name="Library" component={LibraryScreen} />
                <Tab.Screen name="Suggested" component={SuggestedScreen} />
            </Tab.Navigator>
        </View>

    )
}

function LikedScreen(){
    return (
        <View style={styles.screen}>
            <Text style={styles.text}>This is liked screen</Text>
        </View>
    )
}

function LibraryScreen(){
    return (
        <View style={styles.screen}>  
            <Text style={styles.text}>This is library screen</Text>
        </View>
    )
}

function SuggestedScreen(){
    return (
        <View style={styles.screen}>  
            <Text style={styles.text}>This is suggested screen</Text>
        </View>
    )
}

const styles = {
    container : {
        backgroundColor : 'red',
        flex : 1,
    },
    navigation : {
        flex : 1,
    },
    screen : {
        padding : 10,
        backgroundColor : 'gray',
        flex : 1
    },
    text : {
        color : 'white',
        fontSize : 20
    }
}