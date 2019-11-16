import React from 'react';
import {
  Text,
  StyleSheet,
  View
} from 'react-native';

const PlaySongScreen = (props) => {
  const { navigation } = props;
  return (
    <View style={styles.viewContainer}>
      <Text style={styles.text}>
        {JSON.stringify(navigation.getParam('songId', 'NO-ID'))}
      </Text>
    </View>
  );
}


const styles = StyleSheet.create({
  text: {
    fontSize: 20,
  },
});

export default PlaySongScreen;
