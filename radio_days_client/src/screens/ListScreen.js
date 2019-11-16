import React from 'react';
import {
  Text,
  StyleSheet,
  FlatList,
  View,
  Button,
} from 'react-native';

const stations = [
  "Rock 107.9",
  "Hip-Hop 102.8",
  "Classical 92.7",
  "Jazz 88.1",
  "House 99.3",
  "Country 101.5",
  "Electronic 103.8",
]

const ListScreen = (props) => {
  return (
    <View>
      <Text style={styles.textStyle}>Radio Stations</Text>

      <FlatList
        data={stations}
        keyExtractor={(station) => station}
        renderItem={({item}) => {
          return (
            <Button
              title={item}
              key={item}
              style={styles.itemStyle}
              onPress={() => props.navigation.navigate('SongList')}
            />
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
  itemStyle: {
    marginVertical: 20,
  },
});

export default ListScreen;
