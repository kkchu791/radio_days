import React, { useEffect, useState } from "react";
import SongDetails from "../components/SongDetails";
import { getMusicByVenues } from "../api/bandsintown";
import { StyleSheet, FlatList, View, Button } from "react-native";

const SongListScreen2 = props => {
  const [songs, setSongs] = useState({});
  const [artists, setArtists] = useState({});
  useEffect(() => {
    getMusicByVenues("rock", 34.1035949, -118.3267643)
      .then(response => {
        console.log(response),
          setArtists(response["_embedded"]),
          setSongs(response["events"]);
      })
      .catch(error => console.log(error));
  }, []);
  console.log("hello", songs);
  console.log("hello", artists);
  return (
    <View>
      <FlatList
        data={songs}
        keyExtractor={song => song.artist_id.toString()}
        renderItem={({ item }) => {
          return <SongDetails item={item} />;
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

export default SongListScreen2;
