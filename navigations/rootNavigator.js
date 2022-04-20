import { NavigationContainer } from '@react-navigation/native' 
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../components/Login'
import HomeScreen from '../components/Home'
const Stack = createStackNavigator()

export default function StackNavigator(props){
    return <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen name={"LOGIN"} component={LoginScreen}/>
        <Stack.Screen name={"HOME"} component={HomeScreen} />
    </Stack.Navigator>
    </NavigationContainer>
}