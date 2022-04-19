import { NavigationContainer } from '@react-navigation/native' 
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../components/Login'
import HomeScreen from '../components/Home'
import 'react-native-gesture-handler';
const Stack = createNativeStackNavigator()

export default function StackNavigator(props){
    return <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen name={"LOGIN"} component={LoginScreen} ></Stack.Screen>
        <Stack.Screen name={"LOGIN"} component={HomeScreen} ></Stack.Screen>
    </Stack.Navigator>
    </NavigationContainer>
}