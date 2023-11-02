import React from 'react';
import {
    FlatList,
    StyleSheet,
    Text,
    View,
    Image,
    Pressable
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SearchResult = ({ data, input, setInput }) => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={({ item }) => {
                    if (item.place.toLowerCase().includes(input.toLowerCase())) {
                        if (input == "") {
                            return null
                        }
                        return (
                            <Pressable
                                style={styles.pressContainer}
                                onPress={() => {
                                    setInput(item.place);
                                    navigation.navigate("Home", {
                                        input: item.place
                                    })
                                }}
                            >
                                <View>
                                    <Image
                                        style={styles.image}
                                        source={{ uri: item.placeImage }}
                                    />
                                </View>
                                <View style={{ marginLeft: 10 }}>
                                    <Text style={{ fontSize: 15, fontWeight: "500" }}>
                                        {item.place}
                                    </Text>
                                    <Text style={{ marginVertical: 4 }}>
                                        {item.shortDescription}
                                    </Text>
                                    <Text style={{ color: "gray", fontSize: 15 }}>
                                        {item.properties.length}
                                    </Text>
                                </View>
                            </Pressable>
                        )
                    }
                }}
            />
        </View>
    )
}

export default SearchResult;

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    pressContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 10
    },
    image: {
        width: 70,
        height: 70
    }
})