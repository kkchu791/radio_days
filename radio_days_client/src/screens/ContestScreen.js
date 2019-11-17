import React, {useState, useEffect} from 'react';
import { Video } from 'expo-av';
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
} from 'react-native';
import opening from '../assets/videos/op.mp4'

import PlayerComponent from '../components/PlayerComponent';
import RecordScreen from '../screens/RecordScreen';


const { width, height } = Dimensions.get('window');

const djOpen = (
  <View>
    <Video
      source={{uri: 'https://cloud.hypno.com/media/5dd0de9808d52f5f4f73c9b9' }}
      shouldPlay
      resizeMode="cover"
      style={{ width, height }}
    />
  </View>
);

const song = (
  <View>
    <PlayerComponent
      songId="USUM70837368"
      songTitle="Gives you Hell"
      artist="All American Rejects"
    />
  </View>
);

const record = (
  <RecordScreen />
);


const test = (<Text>YOIS THIS WORKING</Text>);

const ContestScreen = (props) => {
  const [video, setVideo] = useState(djOpen)

  useEffect(() => {
    setTimeout(() => {
      setVideo(song);
      setTimeout(() => {
        setVideo(record);
      }, 15000);
    }, 30000);
  }, []);

  return (
    <>
      {video}
    </>
  );
};

const styles = StyleSheet.create({
});

export default ContestScreen;
