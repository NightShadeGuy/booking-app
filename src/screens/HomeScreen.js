import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Pressable,
    TextInput,
    Button,
    Image
} from "react-native";
import Header from "../components/Header";
import { Feather, AntDesign } from '@expo/vector-icons';
import DatePicker from 'react-native-date-ranges';
import {
    BottomModal,
    ModalButton,
    ModalContent,
    ModalFooter,
    ModalTitle,
    SlideAnimation
} from "react-native-modals";
import { useNavigation } from "@react-navigation/native";


const HomeScreen = () => {
    const { container, input, searchText, value, textCount } = styles;

   const navigation = useNavigation();

    const [selectedDates, setSelectedDates] = useState(null);
    const [rooms, setRooms] = useState(1);
    const [adults, setAdults] = useState(2);
    const [childrens, setChildrens] = useState(0);
    const [modalVisible, setModalVisible] = useState(false);
    console.log(selectedDates);

    const CustomButton = (onConfirm) => {
        return (
            <Button
                onPress={onConfirm}
                style={{
                    container: { width: "80%", marginHorizontal: "3%" },
                    text: { fontSize: 20 }
                }}
                primary
                title="Submit"
            />
        )
    }

    return (
        <View>
            <View>
                <Header />
                <ScrollView>
                    <View style={container}>
                        {/* Destination */}
                        <Pressable style={input}>
                            <Feather name="search" size={24} color="black" />
                            <TextInput
                                placeholder="Enter your destination"
                                placeholderTextColor="black"
                            />
                        </Pressable>

                        {/* Selected dates */}
                        <Pressable style={input}>
                            <AntDesign name="calendar" size={24} color="black" />
                            <DatePicker
                                style={{
                                    width: 350,
                                    height: 30,
                                    borderWidth: 0,
                                }}
                                customStyles={{
                                    placeholderText: {
                                        fontSize: 15,
                                        flexDirection: "row",
                                        alignItems: "center",
                                        marginRight: "auto",
                                    },
                                    headerStyle: {
                                        backgroundColor: "#003585"
                                    },
                                    contentText: {
                                        fontSize: 13,
                                        flexDirection: "row",
                                        alignItems: "center",
                                        marginRight: "auto"
                                    },
                                }}
                                customButton={(onConfirm) => CustomButton(onConfirm)}
                                onConfirm={(startDate, endDate) => setSelectedDates(startDate, endDate)}
                                selectedBgColor="#0047A8"
                                allowFontScaling={false}
                                placeholder="Select your Dates"
                                mode={'range'}
                            />
                        </Pressable>

                        {/* Rooms and guests */}
                        <Pressable
                            style={input}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <AntDesign
                                name="user"
                                size={24}
                                color="black"
                            />
                            <TextInput
                                placeholder={`${rooms} room + ${adults} adults + ${childrens} children`}
                                placeholderTextColor="red"
                            />
                        </Pressable>

                        {/* Destination */}
                        <Pressable
                            style={{
                                backgroundColor: "#2a52be",
                                paddingVertical: 20,
                            }}
                            onPress={() => navigation.navigate("Search")}
                        >
                            <Text style={searchText}>Search</Text>
                        </Pressable>
                    </View>

                    <Text style={{ margin: 15, fontSize: 16 }}>Travel More spend less</Text>
                    {/* Offers */}
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    >
                        <Pressable
                            style={{
                                width: 200,
                                height: 150,
                                marginTop: 15,
                                marginHorizontal: 10,
                                backgroundColor: "#003580",
                                borderRadius: 10,
                                padding: 20
                            }}
                        >
                            <Text
                                style={{
                                    color: "white",
                                    fontSize: 15,
                                    fontWeight: "bold",
                                    marginVertical: 7,
                                }}
                            >Genius
                            </Text>
                            <Text
                                style={{
                                    color: "white",
                                    fontSize: 15,
                                    fontWeight: "500"
                                }}
                            >
                                You are ate genius  level one in our  loyalty program
                            </Text>
                        </Pressable>

                        <Pressable
                            style={{
                                width: 200,
                                height: 150,
                                marginTop: 15,
                                marginHorizontal: 15,
                                borderColor: "#E0E0E0",
                                borderWidth: 2,
                                borderRadius: 10,
                                padding: 20
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 15,
                                    fontWeight: "bold",
                                    marginVertical: 7,
                                }}
                            >
                                15% Discount
                            </Text>
                            <Text
                                style={{
                                    fontSize: 15,
                                    fontWeight: "500"
                                }}
                            >
                                Complete 5 stays to unlock level 2
                            </Text>
                        </Pressable>

                        <Pressable
                            style={{
                                width: 200,
                                height: 150,
                                marginTop: 15,
                                marginHorizontal: 15,
                                borderColor: "#E0E0E0",
                                borderWidth: 2,
                                borderRadius: 10,
                                padding: 20
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 15,
                                    fontWeight: "bold",
                                    marginVertical: 7,
                                }}
                            >
                                10% Discount
                            </Text>
                            <Text
                                style={{
                                    fontSize: 15,
                                    fontWeight: "500"
                                }}
                            >
                                Enjoy Discounts at participating at properties worlwide
                            </Text>
                        </Pressable>
                    </ScrollView>

                    <Pressable
                        style={{
                            marginTop: 40,
                            alignItems: "center",
                            justifyContent: "center"
                        }}
                    >
                        <Image
                            style={{ width: 200, height: 50 }}
                            source={{
                                uri: "https://www.vilacvetka.com/wp-content/uploads/2015/04/booking.com-logo-2.png"
                            }}
                        />
                    </Pressable>
                </ScrollView>
            </View>

            <BottomModal
                swipeThreshold={200}
                onBackdropPress={() => setModalVisible(!modalVisible)}
                swipeDirection={["up", "down"]}
                footer={
                    <ModalFooter>
                        <ModalButton
                            text="Apply"
                            style={{
                                marginBottom: 20,
                                color: "white",
                                backgroundColor: "#003580"
                            }}
                            onPress={() => setModalVisible(!modalVisible)}
                        />
                    </ModalFooter>
                }
                modalTitle={<ModalTitle title="Select rooms and guests" />}
                modalAnimation={
                    new SlideAnimation({
                        slideFrom: "bottom"
                    })
                }
                onHardwareBackPress={() => setModalVisible(!modalVisible)}
                visible={modalVisible}
                onTouchOutside={() => setModalVisible(!modalVisible)}
            >
                <ModalContent style={{ width: "100%", height: 310 }}>
                    {/* Rooms */}
                    <View style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginVertical: 15
                    }}>
                        <Text style={{ fontSize: 16, fontWeight: "500" }}>Rooms</Text>
                        <Pressable style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                            <Pressable
                                style={value}
                                onPress={() => setRooms(Math.max(1, rooms - 1))}
                            >
                                <Text style={textCount}>-</Text>
                            </Pressable>
                            <Pressable>
                                <Text>{rooms}</Text>
                            </Pressable>
                            <Pressable
                                style={value}
                                onPress={() => setRooms(rooms + 1)}
                            >
                                <Text style={textCount}>+</Text>
                            </Pressable>
                        </Pressable>
                    </View>

                    {/* Adults */}
                    <View style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginVertical: 15
                    }}>
                        <Text style={{ fontSize: 16, fontWeight: "500" }}>Adults</Text>
                        <Pressable style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                            <Pressable
                                style={value}
                                onPress={() => setAdults(Math.max(1, adults - 1))}
                            >
                                <Text style={textCount}>-</Text>
                            </Pressable>
                            <Pressable>
                                <Text>{adults}</Text>
                            </Pressable>
                            <Pressable
                                style={value}
                                onPress={() => setAdults(adults + 1)}
                            >
                                <Text style={textCount}>+</Text>
                            </Pressable>
                        </Pressable>
                    </View>

                    {/* Childrens */}
                    <View style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginVertical: 15
                    }}>
                        <Text style={{ fontSize: 16, fontWeight: "500" }}>Children</Text>
                        <Pressable style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                            <Pressable
                                style={value}
                                onPress={() => setChildrens(Math.max(0, childrens - 1))}
                            >
                                <Text style={textCount}>-</Text>
                            </Pressable>
                            <Pressable>
                                <Text>{childrens}</Text>
                            </Pressable>
                            <Pressable
                                style={value}
                                onPress={() => setChildrens(childrens + 1)}
                            >
                                <Text style={textCount}>+</Text>
                            </Pressable>
                        </Pressable>
                    </View>
                </ModalContent>
            </BottomModal >
        </View>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        margin: 20,
        borderWidth: 3,
        borderColor: "#FFC72C",
        borderRadius: 6
    },
    input: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        paddingHorizontal: 10,
        paddingVertical: 16,
    },
    searchText: {
        textAlign: "center",
        color: "white",
        fontSize: 15,
        fontWeight: "500"
    },
    value: {
        width: 26,
        height: 26,
        borderRadius: 12,
        borderColor: "#BEBEBE",
        backgroundColor: "#e0e0e0"
    },
    textCount: {
        textAlign: "center",
        fontSize: 19,
        fontWeight: "500",
        paddingHorizontal: 6
    }
})