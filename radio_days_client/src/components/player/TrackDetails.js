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

const TrackDetails = ({
  title,
  artist,
  onAddPress,
  onMorePress,
  onTitlePress,
  onArtistPress,
}) => {

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onAddPress}>
        {back}
      </TouchableOpacity>
      <View style={styles.detailsWrapper}>
        <Text style={styles.title} onPress={onTitlePress}>{title}</Text>
        <Text style={styles.artist} onPress={onArtistPress}>{artist}</Text>
      </View>
      <TouchableOpacity onPress={onMorePress}>
        {next}
      </TouchableOpacity>
    </View>
  );
}

export default TrackDetails;

const styles = StyleSheet.create({
  container: {
    paddingTop: 24,
    flexDirection: 'row',
    paddingLeft: 20,
    alignItems: 'center',
    paddingRight: 20,
  },
  detailsWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
  artist: {
    color: 'black',
    fontSize: 12,
    marginTop: 4,
  },
  button: {
    opacity: 0.72,
  },
  moreButton: {
    borderColor: 'rgb(255, 255, 255)',
    borderWidth: 2,
    opacity: 0.72,
    borderRadius: 10,
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  moreButtonIcon: {
    height: 17,
    width: 17,
  }
});