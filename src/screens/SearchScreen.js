import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { data } from "../../data/data";
import SearchResult from '../components/SearchResult';

const SearchScreen = () => {
  const [input, setInput] = useState("");

  return (
    <SafeAreaView>
      <View style={styles.header}>
        <TextInput
          placeholder='Enter your destination'
          onChangeText={value => setInput(value)}
          value={input}
        />
        <Feather name="search" size={24} color="black" />
      </View>

      <SearchResult
        data={data}
        input={input}
        setInput={setInput}
      />
    </SafeAreaView>
  )
}

export default SearchScreen

const styles = StyleSheet.create({
  header: {
    padding: 10,
    marginTop: 50,
    margin: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 4,
    borderColor: "#FFC72C",
    borderRadius: 10
  }
})