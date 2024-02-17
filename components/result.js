import { View, Text, FlatList, Image, StyleSheet,TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import songs from './songs.json';
import Navigator from '../routes/homeStack';

export default function Result({ navigation }) {

  const pressHandler = (item) => {
    console.log(item)
    navigation.navigate('Playing', {
      artist: item.artist,
      imageSource: item.imageSource,
      name: item.name
    });
  }

  const songs = [
    { key: 1, name: "Song 1", artist: "Artist 1", imageSource: require('../assets/logo192.png') },
    { key: 2, name: "Song 2", artist: "Artist 2", imageSource: require('../assets/desi-cuppa.png') },
    { key: 3, name: "Song 3", artist: "Artist 3", imageSource: require('../assets/logo192.png') },
    { key: 4, name: "Song 4", artist: "Artist 4", imageSource: require('../assets/desi-cuppa.png') }
  ];

  // Define renderItem function
  const renderItem = ({ item }) => (
    <View style={styles.cards}>
      <Image source={item.imageSource} style={styles.img} />
      <Text>{item.name}</Text>
      <Text>{item.artist}</Text>
      <TouchableOpacity onPress={() => pressHandler(item)}>
        <AntDesign name="play" size={24} color="#0d6efd" style={styles.btn} />
      </TouchableOpacity>
    </View>
  );

  return (
    <View>
      <FlatList
        data={songs}
        renderItem={renderItem}
        keyExtractor={item => item.key.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    cards:{
      flex:1,
      backgroundColor:'white',
      height:250,
      width:300,
      marginTop:10,
      marginLeft:12,
      padding:10,
      alignItems:"center",
      borderRadius:10,
    },
    img:{
        height:150,
        width:150
    },
    btn:{
        margin:5
    }
});