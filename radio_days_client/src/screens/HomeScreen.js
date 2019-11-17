import React from 'react';
import {
  Text,
  StyleSheet,
  Button,
  View,
  Alert,
} from 'react-native';

const HomeScreen = (props) => {
  return (

    <View>
      <Text style={styles.text}>
        Radio Days
      </Text>

      <View style={styles.buttons}>
        <Button
          title="Try me"
          onPress={() => props.navigation.navigate('List')}
        />

        <Button
          title="Play Song"
          onPress={() => props.navigation.navigate('PlaySong')}
        />
      </View>
    </View>


  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    alignSelf: 'center',
    paddingTop: 30,
  },
  buttons: {
    paddingTop: 300,
  }
});

export default HomeScreen;
