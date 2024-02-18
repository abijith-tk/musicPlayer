import { StatusBar } from "expo-status-bar";
import { View, StyleSheet, TouchableWithoutFeedback, Keyboard, TextInput, ImageBackground} from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import Result from "./result";
import {styles} from '../styles/styles'


export default function SearchResults({navigation}){
  return (
    <TouchableWithoutFeedback onPress={ () => {
      Keyboard.dismiss()
    }}>
      <ImageBackground source={require('../assets/background.png')} style={styles.container}>
        {/* Search bar */}
        <View style={styles.searchRes}>
          <TextInput 
          placeholder="Search by title or artist..."
          style={styles.searchBoxRes}
          />
          <MaterialIcons name="search" size={24} color="white" style={styles.iconRes}/>
        </View>
        <View style={styles.results}>
          <Result navigation={navigation}/>
        </View>
        {/* <StatusBar style="auto" /> */}
      </ImageBackground>
    </TouchableWithoutFeedback>
  )
}