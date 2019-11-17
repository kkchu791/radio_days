import React from 'react';
import {
  Text,
  StyleSheet,
  View
} from 'react-native';

import PlayerHeader from '../components/player/PlayerHeader';
import AlbumArt from '../components/player/AlbumArt';
import TrackDetails from '../components/player/TrackDetails';
// import SeekBar from '../components/player/SeekBar';

const tempImg = 'https://picsum.photos/200';

const PlaySongScreen = (props) => {
  const { navigation } = props;
  return (
    <View style={styles.playerContainer}>
    <PlayerHeader
      message={navigation.getParam('songTitle')}
    />
    <AlbumArt url={tempImg} />
    <TrackDetails
      title={navigation.getParam('songTitle')}
      artist={navigation.getParam('artist')}
    />
    {/* <SeekBar
      trackLength={200}
      currentPosition={50}
    /> */}
    <View style={styles.viewContainer}>
      <Text style={styles.text}>
        {navigation.getParam('songId', 'NO-ID')}
      </Text>
    </View>
    </View>
  );
}


const styles = StyleSheet.create({
  playerContainer: {
    backgroundColor: 'grey',
  },
  text: {
    fontSize: 20,
  },
});

export default PlaySongScreen;
