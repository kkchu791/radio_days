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

const djOpen = (<Video
  source={{uri: 'https://cloud.hypno.com/media/5dd0de9808d52f5f4f73c9b9' }}
  shouldPlay
  resizeMode="cover"
  style={{ width, height }}
/>);

const song = (
  <PlayerComponent
    songId="USUM70837368"
    songTitle="Gives you Hell"
    artist="All American Rejects"
  />
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
      }, 45000);
    }, 15000);
  }, []);

  return (
    <View style={styles.container}>
      {video}
    </View>
  )
};

const styles = StyleSheet.create({
  container: {

  },
});

export default ContestScreen;
