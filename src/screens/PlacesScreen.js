import React, { useLayoutEffect } from 'react';
import { StyleSheet, Text, View, Pressable, ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Octicons, Ionicons, FontAwesome5 } from '@expo/vector-icons';
import { data } from "../../data/data";
import PropertyCard from '../components/PropertyCard';

const PlacesScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  console.log(route);


  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Popular Places",
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
      },
      headerStyle: {
        backgroundColor: "#003580",
        height: 110,
        borderBottomColor: "transparent",
        shadowColor: "transparent"
      }
    })
  })





  return (
    <View>
      <Pressable style={styles.headerContainer}>
        <Pressable style={styles.icon}>
          <Octicons name="arrow-switch" size={22} color="gray" />
          <Text style={styles.headerText}>Sort</Text>
        </Pressable>

        <Pressable style={styles.icon}>
          <Ionicons name="filter" size={22} color="gray" />
          <Text style={styles.headerText}>Filter</Text>
        </Pressable>

        <Pressable style={styles.icon}>
          <FontAwesome5 name="map-marker-alt" size={22} color="gray" />
          <Text style={styles.headerText}>Map</Text>
        </Pressable>
      </Pressable>

      <ScrollView style={{ backgroundColor: "#F5F5F5" }}>
        {data?.
          filter(item => item.place === route.params.place)
          .map(item =>
            item.properties.map((property, index) => (
              <PropertyCard
                key={index}
                rooms={route.params.rooms}
                children={route.params.childrens}
                adults={route.params.adults}
                selectedDates={route.params.selectedDates}
                property={property}
                availableRooms={property.rooms}
              />
            )))
        }
      </ScrollView>
    </View>
  )
}

export default PlacesScreen;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    padding: 12,
    backgroundColor: "white"
  },
  icon: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 10
  },
  headerText: {
    fontSize: 15,
    fontWeight: "500"
  }
})