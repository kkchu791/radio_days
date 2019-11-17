import React, { useState, useEffect } from 'react';
import {
  Text,
  StyleSheet,
  View,
  Dimensions
} from 'react-native';

import { Audio } from 'expo-av';

import PlayerHeader from '../components/player/PlayerHeader';
import AlbumArt from '../components/player/AlbumArt';
import TrackDetails from '../components/player/TrackDetails';
import SeekBar from '../components/player/SeekBar';
import PlayBackControls from '../components/player/PlayBackControls';

const tempImg = 'https://picsum.photos/200';

const music = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";

const PlaySongScreen = (props) => {
  const { navigation } = props;
  const [muted, setMuted] = useState(false);
  const [volume, setVolume] = useState(1);
  const [playing, setPlaying] = useState(true);
  const [soundObject, setSoundObject] = useState(new Audio.Sound());
  
  async function startPlayer() {

    try {
      await soundObject.loadAsync({uri: music});
      play();
    } catch (error) {
      console.log(error);
    }
  }

  async function stopPlayer() {
    await soundObject.unloadAsync();
  }

  async function loadPlayer() {

    Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
      interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
      playsInSilentModeIOS: true,
      shouldDuckAndroid: true,
      interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
      playThroughEarpieceAndroid: false,
      staysActiveInBackground: true,
    });
    startPlayer()
  }


  useEffect(() => {
    loadPlayer();
    return () => stopPlayer();
  }, []);

  function play() {
    console.log('play');
    soundObject.playAsync();
    setPlaying(true);
  }

  function pause() {
    console.log('pause');
    soundObject.pauseAsync();
    setPlaying(false)
  }

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
      <SeekBar
        trackLength={200}
        currentPosition={50}
      />
      <PlayBackControls
        paused={!playing}
        onPressPause={() => pause()}
        onPressPlay={() => play()}
      />
    </View>
  );
}

const screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  playerContainer: {
    backgroundColor: 'grey',
    height: screenHeight,
  },
  text: {
    fontSize: 20,
  },
});

export default PlaySongScreen;
