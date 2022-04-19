import {createNativeStackNavigator} from '@react-navigation/native' 
import LoginScreen from '../components/Login'
import HomeScreen from '../components/Home'

const Stack = createNativeStackNavigator()

export default function StackNavigator(props){
    return <Stack.Navigator>
        <Stack.Screen name={"LOGIN"} component={LoginScreen} ></Stack.Screen>
        <Stack.Screen name={"LOGIN"} component={HomeScreen} ></Stack.Screen>
    </Stack.Navigator>
}