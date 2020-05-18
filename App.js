import React from 'react';
import { NavigationContainer, createSwitchNavigator, createAppContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import PeoplePage from './pages/PeoplePage';
import PeopleDetail from './pages/PeopleDetail';

const AppStack = createStackNavigator();

export default function App() {
    return(
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{headerShown: false}} >
                <AppStack.Screen name="PeoplePage" component={PeoplePage} />
                <AppStack.Screen name="PeopleDetail" component={PeopleDetail} />
            </AppStack.Navigator>
        </NavigationContainer>
    );
}
