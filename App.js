import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, ImageBackground } from 'react-native';
import { result } from 'result';

export default function App() {
  return (
    <View style={styles.container}>
        <Text style={styles.heading}>Play Your Tune!</Text>
        <View style={styles.main}> 
          <TextInput 
          placeholder='Search for music...'
          style={styles.searchBox}
          />
          <View style={styles.searchBtn}>
            <Button title='Search' onPress={result}/>
          </View>
        </View>
        <StatusBar style="auto" />
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
  heading:{
    color:'black',
    fontWeight:'bold',
    fontSize:24,
    fontStyle:'italic'
  },
  main : {
    width:'80%',
    justifyContent:'center'
  },
  searchBox:{
    padding:10,
    margin:10,
    borderColor:'gray',
    borderWidth:2,
    width:'90%',
    borderRadius:2,
  },
  searchBtn : {
    margin:10,
    width:'90%',  
  }
});
