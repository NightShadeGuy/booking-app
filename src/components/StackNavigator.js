import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Saved from "../screens/Saved";
import Booking from "../screens/Booking";
import Profile from "../screens/Profile";
import { AntDesign, EvilIcons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const StackNavigator = () => {

    const BottomTabs = () => {
        return (
            <Tab.Navigator>
                <Tab.Screen
                    name="Home"
                    component={Home}
                    options={{
                        tabBarLabel: "Home",
                        headerShown: false,
                        tabBarIcon: ({ focused }) => (
                            <AntDesign name="home" size={24} color={focused ? "#003585" : "gray"} />
                        ),

                    }}
                />
                <Tab.Screen
                    name="Saved"
                    component={Saved}
                    options={{
                        tabBarLabel: "Saved",
                        headerShown: false,
                        tabBarIcon: ({ focused }) => (
                            <AntDesign name="hearto" size={24} color={focused ? "#003585" : "gray"} />
                        ),

                    }}
                />
                <Tab.Screen
                    name="Booking"
                    component={Booking}
                    options={{
                        tabBarLabel: "Booking",
                        headerShown: false,
                        tabBarIcon: ({ focused }) => (
                            <AntDesign name="bells" size={24} color={focused ? "#003585" : "gray"} />
                        ),

                    }}
                />
                <Tab.Screen
                    name="Profile"
                    component={Profile}
                    options={{
                        tabBarLabel: "Profile",
                        headerShown: false,
                        tabBarIcon: ({ focused }) => (
                            <AntDesign name="user" size={24} color={focused ? "#003585" : "gray"} />
                        ),

                    }}
                />
            </Tab.Navigator>
        )
    }

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="main"
                    component={BottomTabs}
                    options={{
                        headerShown: true,
                        title: "Booking.com",
                        headerTitleAlign: "center",
                        headerTitleStyle: {
                            fontSize: 20,
                            fontWeight: "bold",
                            color: "white"
                        },
                        headerStyle: {
                            backgroundColor: "#003585",
                        },
                        headerRight: () => (
                            <EvilIcons  
                              name="bell" 
                              size={24} 
                              color="black"
                              style={{marginRight: 12, color: "white"}}
                            />
                        )
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigator;