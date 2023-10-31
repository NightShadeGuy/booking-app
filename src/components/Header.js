import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons, AntDesign, FontAwesome5 } from '@expo/vector-icons';

const Header = () => {
    const { container, button, headerText } = styles;

    return (
        <View style={container}>
            <Pressable style={button}>
                <Ionicons name="bed-outline" size={24} color="white" />
                <Text style={headerText}>Stays</Text>
            </Pressable>
            <Pressable style={button}>
                <Ionicons name="airplane-outline" size={24} color="white" />
                <Text style={headerText}>Flights</Text>
            </Pressable>
            <Pressable style={button}>
                <AntDesign name="car" size={24} color="white" />
                <Text style={headerText}>Car Rental</Text>
            </Pressable>
            <Pressable style={button}>
                <FontAwesome5 name="uber" size={24} color="white" />
                <Text style={headerText}>Taxi</Text>
            </Pressable>
        </View>
    )
}

export default Header;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#003585",
        height: 65,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around"
    },
    button: {
        flexDirection: "row",
        alignItems: "center",
        // borderWidth: 1,
        // borderColor: "white",
        // padding: 8,
        // borderRadius: 25
    },
    headerText: {
        marginLeft: 8,
        fontWeight: "bold",
        color: "white",
        fontSize: 15
    }
})