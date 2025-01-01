import { Stack } from "expo-router";
import { Text, View } from "react-native";

export default function Root(){
    return (
        <Stack screenOptions={{headerShown : false}}>
            <Stack.Screen name="(noBottomBar)/accountinfo" options={{headerShown:true, headerTitle:"Accounts Info"}}/>
        </Stack>
    )
}