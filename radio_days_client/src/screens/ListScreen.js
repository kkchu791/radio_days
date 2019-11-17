import React from "react";
import Card from "../components/Card";
import CardSection from "../components/CardSection";
import StationDetails from "../components/StationDetails";

import { Text, StyleSheet, FlatList, View, Button } from "react-native";

const rock = ["rock 107.9"];

const stations = [
  "Hip-Hop 102.8",
  "Classical 92.7",
  "Jazz 88.1",
  "House 99.3",
  "Country 101.5",
  "Electronic 103.8"
];

const ListScreen = props => {
  return (
    <View>
      <FlatList
        data={rock}
        keyExtractor={station => station}
        renderItem={({ item }) => {
          return <StationDetails item={item} navigation={props.navigation} />;
        }}
      />
      <FlatList
        data={stations}
        keyExtractor={station => station}
        renderItem={({ item }) => {
          return <StationDetails item={item} navigation={props.navigation} />;
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
