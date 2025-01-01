import ImageCard from "@/components/ImageCard";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { Image, StyleSheet, Text, View } from "react-native";

export default function Index(){

    const imageData = [
        {url : "https://images.pexels.com/photos/807598/pexels-photo-807598.jpeg?auto=compress&cs=tinysrgb&w=600" , name : "Nature"},
        {url : "https://images.pexels.com/photos/1213447/pexels-photo-1213447.jpeg?auto=compress&cs=tinysrgb&w=600" , name : "Bulb"},
        {url : "https://images.pexels.com/photos/691668/pexels-photo-691668.jpeg?auto=compress&cs=tinysrgb&w=600", name : "Mountain"},
        {url : "https://images.pexels.com/photos/1266808/pexels-photo-1266808.jpeg?auto=compress&cs=tinysrgb&w=600" , name : "Abstract"},
        {url : "https://images.pexels.com/photos/33045/lion-wild-africa-african.jpg?auto=compress&cs=tinysrgb&w=600", name : "Lion"},
        {url : "https://images.pexels.com/photos/544542/pexels-photo-544542.jpeg?auto=compress&cs=tinysrgb&w=600", name : "Mustang"}
    ]

    return (
        <View style={styles.container}>
            <ParallaxScrollView headerBackgroundColor={{dark:'black', light:'white'}} headerImage={<Image style={{flex : 1}} source={{uri : 'https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg?auto=compress&cs=tinysrgb&w=600'}}/>}>
                <View style={styles.imageContainer}>
                    {imageData.map((data,index) => {
                        return (
                            <ImageCard key={index}
                            url = {data.url} 
                            name = {data.name}/>
                        )
                    })}
                </View>
            </ParallaxScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
    },
    imageContainer : {
        flex : 1,
        flexWrap : "wrap",
        flexDirection : "row",
        justifyContent : "space-between"
    }
})