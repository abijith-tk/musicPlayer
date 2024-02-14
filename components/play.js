import { StatusBar } from "expo-status-bar";
import { StyleSheet, ScrollView, FlatList, View } from "react-native"; 

export default function playing(){
    return (
        <View style={styles.container}>
            <View style={styles.nowPlaying}>
                <Text style={styles.head}>Now Playing</Text>
                <View style={styles.card}>
                    <Text>Song 1</Text>
                    <Text>Artist 1</Text>
                </View>
            </View>

            <View style={styles.upcoming}>
                <View style={styles.card}>
                    <Text>Song 2</Text>
                    <Text>Artist 2</Text>
                </View>
                <View style={styles.card}>
                    <Text>Song 3</Text>
                    <Text>Artist 3</Text>
                </View>
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
      },
})