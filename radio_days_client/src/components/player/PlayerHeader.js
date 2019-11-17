import React from "react";

import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
// import Icon from 'react-native-vector-icons/FontAwesome';

import Icon from 'react-native-vector-icons/AntDesign';

const back = <Icon name="back" size={20} color="black" />;
const queue = <Icon name="caretdown" size={20} color="black" />;

const MyButton = (
  <Icon.Button
    name="facebook"
    backgroundColor="#3b5998"
    onPress={this.loginWithFacebook}
  >
    Login with Facebook
  </Icon.Button>
);

const PlayerHeader = ({ 
  message,
  onDownPress,
  onMessagePress,
  onQueuePress,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onDownPress}>
        {back}
      </TouchableOpacity>
      <Text onPress={onMessagePress} style={styles.message}>
        {message.toUpperCase()}
      </Text>
      <TouchableOpacity onPress={onQueuePress}>
        {queue}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 72,
    paddingTop: 20,
    paddingLeft: 12,
    paddingRight: 12,
    flexDirection: "row",
    backgroundColor: 'white',
  },
  message: {
    flex: 1,
    textAlign: "center",
    color: "rgba(255, 255, 255, 0.72)",
    fontWeight: "bold",
    fontSize: 10
  },
  button: {
    opacity: 0.72
  }
});

export default PlayerHeader;
