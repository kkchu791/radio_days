import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import CardSection from "../components/CardSection";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { getAlbumArt } from "../api/umg";
import guns_n_roses_image from "../assets/images/guns_n_roses.png";

const ArtistSongDetails = props => {
  const [albumArt, setAlbumArt] = useState("");
  const { navigation } = props;

  useEffect(() => {
    getAlbumArt(props.item.isrc).then(async response =>
      setAlbumArt(response["coverUrl"])
    );
  }, []);
  return (
    <Card>
      <TouchableOpacity
        onPress={() =>
          props.navigation.navigate("PlaySong", {
            songId: props.item.isrc,
            songTitle: props.item.title,
            artist: props.author,
            albumArt: albumArt
          })
        }
      >
        <CardSection>
          <View style={styles.thumbnailContainerStyle}>
            <Image
              style={styles.thumbnailStyle}
              source={
                albumArt ? { uri: albumArt.toString() } : guns_n_roses_image
              }
            />
          </View>

          <View style={styles.headerContentStyle}>
            <Text style={styles.headerTextStyle}>{props.item.title}</Text>
            {props.item.label_name && <Text>{props.item.label_name}</Text>}
          </View>
        </CardSection>
      </TouchableOpacity>
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

export default ArtistSongDetails;
