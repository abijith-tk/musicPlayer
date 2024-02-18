import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    heading:{
      color:'white',
      fontWeight:'bold',
      fontSize:28,
      marginBottom:20
    },
    main : {
      width:'80%',
      justifyContent:'center'
    },
    searchBox:{
      paddingRight:10,
      paddingLeft:10,
      paddingTop:5,
      paddingBottom:5,
      margin:10,
      width:'90%',
      borderRadius:10,
      backgroundColor:'white'
    },
    searchBtn : {
      margin:10,
      width:'90%', 
      borderRadius:20,
    },
    card:{
        backgroundColor:'white',
        height:'auto',
        width:300,
        alignItems:"center",
        borderRadius:10,
        padding:10,
        margin:10
      },
    searchRes:{
      flexDirection:'row',
      marginTop:'20%'
    },
    searchBoxRes:{
      paddingRight:10,
      paddingLeft:10,
      paddingTop:5,
      paddingBottom:5,
      marginTop:10,
      marginLeft:10,
      // marginRight:5,
      width:'75%',
      borderTopLeftRadius:10,
      borderBottomLeftRadius:10,
      backgroundColor:'white'
    },
    iconRes:{
      fontWeight:'bold',
      backgroundColor:'blue',
      height:40,
      width:40,
      textAlign:'center',
      paddingTop:8,
      borderTopRightRadius:10,
      borderBottomRightRadius:10,
      backgroundColor:'#0d6efd',
      marginTop:10,
    },
    results:{
        flex:1,
        padding:10
    }
});