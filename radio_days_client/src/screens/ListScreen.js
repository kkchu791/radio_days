import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import CardSection from "../components/CardSection";
import StationDetails from "../components/StationDetails";

import { Text, StyleSheet, FlatList, View, Button } from "react-native";

const stations = [
  "rock 107.9",
  "Hip-Hop 102.8",
  "Classical 92.7",
  "Jazz 88.1",
  "House 99.3",
  "Country 101.5",
  "Electronic 103.8"
];

const ListScreen = props => {
  const [gps, setGps] = useState([]);

  useEffect(() => {
    (function findCoordinates() {
      navigator.geolocation.getCurrentPosition(
        position => {
          setGps({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          });
        },
        error => console.log(error),
        { enableHighAccuracy: false, timeout: 20000, maximumAge: 1000 }
      );
    })();
  }, []);

  return (
    <View>
      <FlatList
        data={stations}
        keyExtractor={station => station}
        renderItem={({ item }) => {
          return (
            <StationDetails
              item={item}
              navigation={props.navigation}
              location={gps}
            />
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30
  },
  itemStyle: {
    marginVertical: 20
  }
});

export default ListScreen;
