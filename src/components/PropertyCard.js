import React from 'react';
import { StyleSheet, Text, View, Pressable, Image, Dimensions } from 'react-native'
import { AntDesign, MaterialIcons } from '@expo/vector-icons';


const PropertyCard = ({
  rooms,
  children,
  adults,
  selectedDates,
  property,
  availableRooms
}) => {
  const { width, height } = Dimensions.get("window");
  return (
    <View>
      <Pressable style={styles.container}>
        <View>
          <Image
            source={{ uri: property.image }}
            style={{
              width: width - 200,
              height: height / 2
            }}
          />
        </View>

        <View>
          <View style={styles.headerText}>
            <Text style={{ width: 125 }}>{property.name}</Text>
            <AntDesign name="hearto" size={24} color="red" />
          </View>

          <View style={styles.subHeader}>
            <MaterialIcons name="stars" size={24} color="black" />
            <Text>{property.rating}</Text>
            <View style={styles.badge}>
              <Text style={styles.bagdeText}>Genius Level</Text>
            </View>
          </View>

          <Text style={styles.address}>
            {property.address.length > 50
              ? property.address.substr(0, 50)
              : property.address
            }
          </Text>
          <Text style={styles.priceText}>Price for 1 Night and {adults} adults</Text>

          <View style={styles.price}>
            <Text
              style={{
                color: "red",
                fontSize: 12,
                textDecorationLine: "line-through"
              }}
            >
              {property.oldPrice * adults}
            </Text>
            <Text style={{ fontSize: 12, }}>
              Rs {property.newPrice * adults}
            </Text>
          </View>

          <View style={styles.bottomContainer}>
            <Text style={styles.bottomText}>Deluxe Room</Text>
            <Text style={styles.bottomText}>Hotel Room : 1 bed</Text>
          </View>

          <View style={styles.badge2}>
            <Text style={styles.bagdeText}>Limited Time Deal</Text>
          </View>
        </View>

      </Pressable>

    </View>
  )
}

export default PropertyCard;

const styles = StyleSheet.create({
  container: {
    margin: 15,
    flexDirection: "row",
    backgroundColor: "white"
  },
  headerText: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10
  },
  subHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around"
  },
  badge: {
    backgroundColor: "#6CB4EE",
    borderRadius: 5,
    paddingVertical: 3,
    width: 100
  },
  badge2: {
    backgroundColor: "#6082B6",
    borderRadius: 5,
    paddingVertical: 3,
    marginTop: 4,
    marginLeft: 10,
    width: 130
  },
  bagdeText: {
    textAlign: "center",
    color: "white"
  },
  address: {
    width: 150,
    padding: 10,
    color: "gray",
    fontWeight: "bold"
  },
  priceText: {
    fontSize: 14,
    fontWeight: "500",
    paddingLeft: 10
  },
  price: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 5
    , paddingLeft: 10
  },
  bottomContainer: {
    marginTop: 6,
    paddingLeft: 10
  },
  bottomText: {
    color: "gray",
    fontSize: 16
  }
})