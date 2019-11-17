import React from "react";
import Card from "../components/Card";
import CardSection from "../components/CardSection";
import guns_n_roses_image from "../assets/images/guns_n_roses.png";
import { StyleSheet, Text, View, Image } from "react-native";

const RankingDetails = props => {
  return (
    <Card>
      <CardSection>
        <View style={styles.thumbnailContainerStyle}>
          <Image style={styles.thumbnailStyle} source={guns_n_roses_image} />
        </View>

        <View style={styles.headerContentStyle}>
          <Text style={styles.headerTextStyle}>{props.item.name}</Text>
          <Text style={styles.headerTextStyle}>{props.item.score}</Text>
        </View>
      </CardSection>
    </Card>
  );
};

const styles = StyleSheet.create({
  headerContentStyle: {
    flexDirection: "column",
    justifyContent: "space-around"
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
});

export default RankingDetails;
