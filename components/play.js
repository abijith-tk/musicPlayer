import { StyleSheet, Text, View, ImageBackground, Image } from "react-native"; 
import Navigator from '../routes/homeStack';

export default function Playing({route}){

  const { artist, imageSource, key, name } = route.params;
  console.log(route.params)
    return (
      <ImageBackground source={require('../assets/background.png')} style={styles.container}>
        <View style={styles.container}>
            <Text style={styles.head}>Now Playing</Text>
            <View style={styles.card}>
              <Image source={imageSource} style={styles.img}/>
                <View style={styles.textElements}>
                  <Text>{name}</Text>
                  <Text>{artist}</Text>
                </View>
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
        height:'auto',
        width:300,
        alignItems:"center",
        borderRadius:10,
      },
      head:{
        color:'white',
        fontSize:24,
        paddingBottom:20,
      },
      textElements:{
        color:'black',
        fontWeight:"800",
        margin:20
      },
      img:{
        margin:10
      }
})