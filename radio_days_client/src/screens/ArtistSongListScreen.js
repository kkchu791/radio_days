import React, { useEffect, useState } from "react";
import ArtistSongDetails from "../components/ArtistSongDetails";
import { getArtistId, getSongsByArtist } from "../api/umg";
import { StyleSheet, FlatList, View, Button } from "react-native";

const ArtistSongListScreen = props => {
  const [songs, setSongs] = useState({});
  const { navigation } = props;

  useEffect(() => {
    getArtistId(navigation.getParam("artist"))
      .then(response => response["artists"][0].artist_id)
      .then(artistId => getSongsByArtist(artistId))
      .then(response => setSongs(response["artist"]["tracks"]))
      .catch(error => console.log(error));
  }, []);
  console.log(songs);
  return (
    <View>
      <FlatList
        data={songs}
        keyExtractor={info => info.isrc}
        renderItem={({ item }) => {
          return (
            <ArtistSongDetails
              item={item}
              navigation={props.navigation}
              author={navigation.getParam("artist")}
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
  }
});

export default ArtistSongListScreen;
