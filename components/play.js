import { StatusBar } from "expo-status-bar";
import { StyleSheet, ScrollView, FlatList, View } from "react-native"; 
import Navigator from '../routes/homeStack';

export default function Playing(){
    return (
        <View style={styles.container}>
            <Text style={styles.head}>Now Playing</Text>
            <View style={styles.card}>
                <Image />
                <Text>Song</Text>
                <Text>Artist</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
      },
      card : {
        backgroundColor:'white',
        width:'60%',
        justifyContent:'center',
        textAlign:'center',
      },
      head:{
        color:'white',
      }
})