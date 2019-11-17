import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  Alert,
  Image,
} from 'react-native';
import { Button } from 'react-native-elements';
import radio_knob_image from '../assets/images/radio_knob.png'

const HomeScreen = (props) => {
  return (
    <View style={styles.background}>
      <Text style={styles.text}>
        Radio
      </Text>

      <Image
        style={styles.image}
        source={radio_knob_image}
      />

      <Text style={styles.text}>
        Days
      </Text>

      <View style={styles.buttons}>
        <Button
          title="Play Radio"
          onPress={() => props.navigation.navigate('List')}
          style={styles.button}
        />

        <Button
          title="6pm Button"
          onPress={() => props.navigation.navigate('Contest')}
          style={styles.button}
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
    color: 'white',
    fontWeight: 'bold',
  },
  buttons: {
    paddingTop: 100,
    width: '80%',
    alignSelf: 'center'
  },
  button: {
    padding: 15,
  },
  background: {
    backgroundColor: '#1A1414',
  },
  image: {
    marginTop: 30,
    marginBottom: 30,
    alignSelf: 'center',
  }
});

export default HomeScreen;
