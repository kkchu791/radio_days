import React from 'react';
import { Video } from 'expo-av';
import {
  StyleSheet,
  View,
  Dimensions,
} from 'react-native';
import opening from '../assets/videos/op.mp4'

const ContestScreen = (props) => {
  const { width, height } = Dimensions.get('window');

  return (
    <View style={styles.container}>
      <Video
        source={{uri: 'https://cloud.hypno.com/media/5dd0de9808d52f5f4f73c9b9' }}
        shouldPlay
        resizeMode="cover"
        style={{ width, height }}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {

  },
});

export default ContestScreen;
