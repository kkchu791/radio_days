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

      <Button
        title="Try me"
        onPress={() => props.navigation.navigate('List')}
      />
    </View>


  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
