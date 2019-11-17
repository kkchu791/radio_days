import React from "react";
import RankingDetails from "../components/RankingDetails";

import { Text, StyleSheet, FlatList, View, Button } from "react-native";

const rankings = [
  {name: "Will", score: "97%"},
  {name: "Albert", score: "95%"},
  {name: "Dom", score: "90%"},
  {name: "Harry", score: "88%"},
  {name: "Kirk", score: "85%"},
]
const RankingScreen = props => {
  return (
    <View>
      <FlatList
        data={rankings}
        keyExtractor={ranking => ranking.name}
        renderItem={({ item }) => {
          return <RankingDetails item={item} />;
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

export default RankingScreen;
