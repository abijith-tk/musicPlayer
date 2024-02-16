// import { StatusBar } from "expo-status-bar";
// import { View, StyleSheet, TouchableWithoutFeedback, Keyboard, TextInput, ImageBackground} from "react-native";
// import { MaterialIcons } from '@expo/vector-icons';
// import Result from "./components/result";

// export default function App(){
//   return (
//     <TouchableWithoutFeedback onPress={ () => {
//       Keyboard.dismiss()
//     }}>
//       <ImageBackground source={require('./assets/background.png')} style={styles.container}>
//         {/* Search bar */}
//         <View style={styles.search}>
//           <TextInput 
//           placeholder="Search by title or artist..."
//           style={styles.searchBox}
//           />
//           <MaterialIcons name="search" size={24} color="white" style={styles.icon}/>
//         </View>
//         <View style={styles.results}>
//           <Result />
//         </View>
//         {/* <StatusBar style="auto" /> */}
//       </ImageBackground>
//     </TouchableWithoutFeedback>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex:1,
//     alignItems: 'center',
//   },
//   search:{
//     flexDirection:'row',
//     marginTop:'20%'
//   },
//   searchBox:{
//     paddingRight:10,
//     paddingLeft:10,
//     paddingTop:5,
//     paddingBottom:5,
//     marginTop:10,
//     marginLeft:10,
//     // marginRight:5,
//     width:'75%',
//     borderTopLeftRadius:10,
//     borderBottomLeftRadius:10,
//     backgroundColor:'white'
//   },
//   icon:{
//     fontWeight:'bold',
//     backgroundColor:'blue',
//     height:40,
//     width:40,
//     textAlign:'center',
//     paddingTop:8,
//     borderTopRightRadius:10,
//     borderBottomRightRadius:10,
//     backgroundColor:'#0d6efd',
//     marginTop:10,
//   },
//   results:{
//     flex:1,
//     padding:10
//   }
// })

import Navigator from './routes/homeStack'

export default function App() {
  return (
    <Navigator />
  );
}
