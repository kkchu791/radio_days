import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';

const back = <Icon name="stepbackward" size={30} color="black" />;
const next = <Icon name="stepforward" size={30} color="black" />;
const play = <Icon name="play" size={40} color="black" />;

const PlayBackControls = ({
  paused,
  onPressPlay,
  onBack,
  onNext,
  nextDisabled,

}) => {
  return (
    <View style={styles.container}>
      <View style={{width: 40}} />
      <TouchableOpacity onPress={onBack}>
        {back}
      </TouchableOpacity>
      <View style={{width: 20}} />
      {
      !paused
      ? (
        <TouchableOpacity onPress={onPressPause}>
          <View style={styles.playButton}>
            {play}
          </View>
        </TouchableOpacity>
      )
      : (
          <TouchableOpacity onPress={onPressPlay}>
            <View style={styles.playButton}>
              {next}
            </View>
          </TouchableOpacity>
        )
      }
      <View style={{width: 20}} />
        <TouchableOpacity onPress={onNext} disabled={nextDisabled}>
          {next}
        </TouchableOpacity>
      <View style={{width: 40}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 8,
  },
  playButton: {
    height: 72,
    width: 72,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 72 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondaryControl: {
    height: 18,
    width: 18,
  },
  off: {
    opacity: 0.30,
  }
});

export default PlayBackControls;