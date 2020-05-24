import React from 'react';
import { NavigationContainer, createSwitchNavigator, createAppContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderBackground } from '@react-navigation/stack';

import PeoplePage from './pages/PeoplePage';
import PeopleDetail from './pages/PeopleDetail';

const AppStack = createStackNavigator();

function NavStack() {
    return (
        <AppStack.Navigator 
            screenOptions={{
                headerShown: true, 
                headerTitleAlign: "center",
                headerStyle: {
                    backgroundColor: '#bae8e8',
                },
                headerTintColor: '#272343',
                headerTitleStyle :{
                    fontWeight: 'bold',
                }
                }} 
            >
            <AppStack.Screen 
                name="PeoplePage"   
                component={PeoplePage} 
                options={{
                    title: "Contatos",
                }}  
            />
            <AppStack.Screen 
                name="PeopleDetail" 
                component={PeopleDetail}
                options={({ route }) => ({ title: route.params.title })}
            />
        </AppStack.Navigator>
    )
}


export default function App() {
    return(
        <NavigationContainer>
            <NavStack />
        </NavigationContainer>
    );
}

