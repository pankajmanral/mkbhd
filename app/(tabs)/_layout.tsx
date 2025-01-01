// import { Link, Slot } from "expo-router";
// import { Text, View } from "react-native";


// export default function HomeScreen(){
    //     return (
        //        <View>
        //             <Slot/>
        //             <Link href={'/accounts'}>
        //                 <Text style={{fontSize:20}}>This is accounts page</Text>
        //             </Link>
        //             <Link href={'/foryou'}>
        //                 <Text style={{fontSize:20}}>This is for you page</Text>
        //             </Link>
        //             <Link href={'/'}>
        //                 <Text style={{fontSize:20}}>This is home page</Text>
        //             </Link>
        //        </View>
        //     )
        // }
        
import { Tabs } from "expo-router";

export default function BottomNavigation(){
    return (
        <Tabs> 
            <Tabs.Screen name="foryou" options={{title:"For You",headerShown:false}}></Tabs.Screen>
            <Tabs.Screen name="index" options={{title:"Home",headerShown:false}}></Tabs.Screen> 
            <Tabs.Screen name="accounts" options={{title:"Accounts",headerShown:false}}></Tabs.Screen>
        </Tabs> 
    )
}