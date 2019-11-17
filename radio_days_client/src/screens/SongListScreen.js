import React from 'react';
import SongDetails from '../components/SongDetails';

import {
  StyleSheet,
  FlatList,
  View,
  Button,
} from 'react-native';

const songs = [
  {title: "Gimme Shelter", author: "Rolling Stones", id: '1'},
  {title: "Bohemiab Rhapsody", author: "Queen", id: '2'},
  {title: "Sweet Child O' Mine", author: "Guns N' Roses", id: '3'},
  {title: "Livin' On A Prayer", author: "Bon Jovi", id: '4'},
  {title: "Kickstart My Heart", author: "Motley Crue", id: '5'}
]

const SongListScreen = (props) => {
  return (
    <View>
      <FlatList
        data={songs}
        keyExtractor={(song) => song.id}
        renderItem={({item}) => {
          return (
            <SongDetails
              item={item}
            />
          );
        }}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
});

export default SongListScreen;
