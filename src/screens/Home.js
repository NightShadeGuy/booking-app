import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Pressable,
    TextInput,
    Button
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
}
    from "react-native-modals";


const Home = () => {
    const { container, input, searchText } = styles;

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
                                placeholder={'Apr 27, 2018 → Jul 10, 2018'}
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
                            <TextInput placeholder="1 room + 2 adults + 2 children" />
                        </Pressable>

                        {/* Selected Rooms */}
                        <Pressable
                            style={{
                                backgroundColor: "#2a52be",
                                paddingVertical: 20
                            }}
                        >
                            <Text style={searchText}>Search</Text>
                        </Pressable>
                    </View>
                </ScrollView>
            </View>

            <BottomModal
                modalTitle={
                    <ModalTitle
                        title="Select rooms and guests"
                        modalAnimation={new SlideAnimation({
                            slideFrom: "bottom"
                        })}
                        onHardwareBackPress={() => setModalVisible(!modalVisible)}
                        modalVisible={modalVisible}
                        onTouchOutside={() => setModalVisible(!modalVisible)}
                    >
                        <ModalContent style={{ width: "100%", height: 310 }}>
                            <Text>wewewe</Text>
                        </ModalContent>
                    </ModalTitle>
                }
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
            >
            </BottomModal >
        </View>
    )
}

export default Home;

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
    }
})