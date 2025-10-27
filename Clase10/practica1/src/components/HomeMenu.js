import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import { NavigationContainer } from "@react-navigation/native";
import Entypo from '@expo/vector-icons/Entypo';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import usuarios from "../screens/usuarios";


const Tab = createBottomTabNavigator()

function HomeMenu() {
    return (
            <Tab.Navigator>
                <Tab.Screen name="Home" component={Home} options={
                    {
                        headerShown: false,
                        tabBarIcon: () => <Entypo name="home" size={24} color="black" />
                    }} />
                <Tab.Screen name="Profile" component={Profile} options={{
                    headerShown: false,
                    tabBarIcon: () => <MaterialCommunityIcons name="face-woman-profile" size={24} color="black" />
                }} />
                <Tab.Screen name="Usuarios" component={usuarios} options={{
                    headerShown: false,
                    tabBarIcon: () => <Entypo name="users" size={24} color="black" />
                }} />
            </Tab.Navigator>
    )
}

export default HomeMenu;