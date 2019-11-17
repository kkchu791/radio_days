import React from "react";
import SongDetails from "../components/SongDetails";

import {
  StyleSheet,
  FlatList,
  View,
  Button,
  TouchableOpacity
} from "react-native";

const music = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";

const songs = [
  {
    title: "Gimme Shelter",
    artist: "Rolling Stones",
    id: "1",
    file: require("../assets/music/gimme_shelter.mp3"),
  },
  {
    title: "Bohemiab Rhapsody",
    artist: "Queen",
    id: "2",
    url: music,
  },
  {
    title: "Sweet Child O' Mine",
    artist: "Guns N' Roses",
    id: "3",
    url: music,
  },
  {
    title: "Livin' On A Prayer",
    artist: "Bon Jovi",
    id: "4",
    url: music,
  },
  {
    title: "Kickstart My Heart",
    artist: "Motley Crue",
    id: "5",
    url: music,
  }
];

const SongListScreen = props => {
  return (
    <View>
      <FlatList
        data={songs}
        keyExtractor={song => song.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate("PlaySong", {
                  songId: item.id,
                  songTitle: item.title,
                  artist: item.artist,
                  songUrl: item.url,
                  file: item.file,
                });
              }}
            >
              <SongDetails item={item} />
            </TouchableOpacity>
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

export default SongListScreen;
