import React from "react";
import SongDetails from "../components/SongDetails";

import guns_n_roses_image from "../assets/images/guns_n_roses.png";

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
    albumArt: guns_n_roses_image,
  },
  {
    title: "Bohemiab Rhapsody",
    artist: "Queen",
    id: "2",
    url: music,
    albumArt: guns_n_roses_image,
  },
  {
    title: "Sweet Child O' Mine",
    artist: "Guns N' Roses",
    id: "3",
    url: music,
    albumArt: guns_n_roses_image,
  },
  {
    title: "Livin' On A Prayer",
    artist: "Bon Jovi",
    id: "4",
    url: music,
    albumArt: guns_n_roses_image,
  },
  {
    title: "Kickstart My Heart",
    artist: "Motley Crue",
    id: "5",
    url: music,
    albumArt: guns_n_roses_image,
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
                  albumArt: item.albumArt,
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
