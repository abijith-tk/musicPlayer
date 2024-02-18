import { StyleSheet, Text, View, ImageBackground, Image } from "react-native"; 
import Navigator from '../routes/homeStack';
import {styles} from '../styles/styles'

export default function Playing({route}){

  const { artist, imageSource, key, name } = route.params;
  console.log(route.params)
    return (
      <ImageBackground source={require('../assets/background.png')} style={styles.container}>
        <View style={styles.container}>
            <Text style={styles.heading}>Now Playing</Text>
            <View style={styles.card}>
              <Image source={imageSource} style={styles.img}/>
                <View style={styles.textElements}>
                  <Text style={styles.txt}>{name}</Text>
                  <Text style={styles.txt}>{artist}</Text>
                </View>
            </View>
        </View>
      </ImageBackground>
    );
}