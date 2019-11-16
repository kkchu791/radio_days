import React from 'react';
import {
  Text,
  StyleSheet,
  FlatList,
  View
} from 'react-native';

const songs = [
  {title: "Gimme Shelter", author: "Rolling Stones"},
  {title: "Bohemiab Rhapsody", author: "Queen"},
  {title: "Sweet Child O' Mine", author: "Guns N' Roses"},
  {title: "Livin' On A Prayer", author: "Bon Jovi"},
  {title: "Kickstart My Heart", author: "Motley Crue"}
]

const SongListScreen = (props) => {
  return (
    <View>
      <FlatList
        data={songs}
        keyExtractor={(song) => song.title}
        renderItem={({item}) => {
          return (
            <Text>
              {item.title}
            </Text>
          )
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
