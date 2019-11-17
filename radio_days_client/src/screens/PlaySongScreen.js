import React from 'react';
import {
  Text,
  StyleSheet,
  View
} from 'react-native';

import PlayerHeader from '../components/player/PlayerHeader';
import AlbumArt from '../components/player/AlbumArt';

const tempImg = 'https://picsum.photos/200';

const PlaySongScreen = (props) => {
  const { navigation } = props;
  return (
    <>
    <PlayerHeader
      message={navigation.getParam('songTitle')}
    />
    <AlbumArt url={tempImg} />
    <View style={styles.viewContainer}>
      <Text style={styles.text}>
        {navigation.getParam('songId', 'NO-ID')}
      </Text>
    </View>
    </>
  );
}


const styles = StyleSheet.create({
  text: {
    fontSize: 20,
  },
});

export default PlaySongScreen;
