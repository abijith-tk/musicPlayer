import { StyleSheet, Text, View, ImageBackground, Image } from "react-native"; 
import Navigator from '../routes/homeStack';

export default function Playing({route}){
  const { name, artist, img} = route.params
    return (
      <ImageBackground source={require('../assets/background.png')} style={styles.container}>
        <View style={styles.container}>
            <Text style={styles.head}>Now Playing</Text>
            <View style={styles.card}>
                <Image />
                <Text>Song</Text>
                <Text>Artist</Text>
            </View>
        </View>
      </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      card:{
        backgroundColor:'white',
        height:250,
        width:300,
        alignItems:"center",
        borderRadius:10,
      },
      head:{
        color:'white',
      }
})