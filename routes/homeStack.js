import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../components/home";
import SearchResults from "../components/searchResults";
import Result from "../components/result";
import Playing from "../components/play";

const Stack = createNativeStackNavigator();

export default function HomeStack(){
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} options={{headerShown:false}} />
                <Stack.Screen name="Results" component={SearchResults} options={{headerShown:false}} />
                <Stack.Screen name="Playing" component={Playing} options={{headerShown:false}} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};