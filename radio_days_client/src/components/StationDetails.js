import React from "react";
import Card from "../components/Card";
import CardSection from "../components/CardSection";
import { StyleSheet, Text, View, Image, Button } from "react-native";

const StationDetails = props => {
  let totalWords = props.item;
  let firstWord = totalWords.replace(/ .*/, "");
  return (
    <Card>
      <CardSection>
        <Button
          title={props.item}
          key={props.item}
          style={styles.textStyle}
          onPress={() =>
            props.navigation.navigate("SongList2", {
              genre: firstWord
            })
          }
        />
      </CardSection>
    </Card>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    height: 50,
    flex: 1,
    fontSize: 25,
    alignItems: "center",
    marginLeft: 10,
    marginRight: 10
  }
});

export default StationDetails;
