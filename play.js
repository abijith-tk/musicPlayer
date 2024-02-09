import { StatusBar } from "expo-status-bar";
import { ScrollView, FlatList, View } from "react-native"; 

export default function playing(){
    return (
        <View style={styles.container}>
            <View style={styles.nowPlaying}>
                <Text style={styles.head}>Now Playing</Text>
                <View style={styles.card}>
                    <Text>Song1</Text>
                </View>
            </View>

            <View style={styles.upcoming}>
                <View style={styles.card}>
                    <Text>Song 2</Text>
                </View>
                <View style={styles.card}>
                    <Text>Song 3</Text>
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
})