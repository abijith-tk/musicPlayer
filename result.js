import { StatusBar } from "expo-status-bar";
import { FlatList, ScrollView, Button, ImageBackground, View, StyleSheet } from "react-native";

export default function result(){
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.song}>
                    <Text>Song1</Text>
                </View>
                <View style={styles.song}>
                    <Text>Song2</Text>
                </View>
                <View style={styles.song}>
                    <Text>Song3</Text>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
      },
      song:{
        width:'60%',
        backgroundColor:'white',
      },
})