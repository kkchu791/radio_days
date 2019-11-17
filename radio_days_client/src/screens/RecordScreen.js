import React from 'react';
import { Text, View, TouchableOpacity, Dimensions } from 'react-native';
import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';
import { Video } from 'expo-av';
import * as FileSystem from 'expo-file-system';
//import { FileSystem } from 'expo';
import axios from 'axios';

export default class CameraExample extends React.Component {
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.front,
    uri: null,
    recording: false,
  };

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
    setTimeout(() => {
      this.recordVideo();
    }, 1000);
  }

  recordVideo = () => {
    console.log("its hits here")
    this.camera.recordAsync({maxDuration: 10 })
      .then(data => {
        this.setState({ uri: data.uri });
      });
      this.setState({recording: true});
  }

  getVideoSize = () => {
    const { width, height } = Dimensions.get('window');
    return { width, height };
  }

  render() {
    if (this.state.uri) {
      console.log(this.state.uri, "URI")
      return (
        <View>
          <Video
            source={{ uri: this.state.uri }}
            shouldPlay
            resizeMode="cover"
            style={this.getVideoSize()}
          />
        </View>
      )
    } else {
      const { hasCameraPermission } = this.state;
      if (hasCameraPermission === null) {
        return <View />;
      } else if (hasCameraPermission === false) {
        return <Text>No access to camera</Text>;
      } else {
        return (
          <View style={{ flex: 1 }}>
            <Camera
              style={{ flex: 1 }}
              type={this.state.type}
              ref={ref => {
                this.camera = ref;
              }}
            >
              <View
                style={{
                  flex: 1,
                  backgroundColor: 'transparent',
                  flexDirection: 'row',
                }}>
                <TouchableOpacity
                  style={{
                    flex: 0.2,
                    alignSelf: 'flex-end',
                    alignItems: 'center',
                  }}
                  onPress={() => {
                    this.recordVideo();
                  }}>
                    <Text style={{ fontSize: 14, marginBottom: 10, color: 'white' }}>
                      {
                        this.state.recording
                        ? (
                          "Recording"
                        )
                        : (
                          "Start Recording"
                        )

                      }
                    </Text>
                </TouchableOpacity>
              </View>
            </Camera>
          </View>
        );
      }

    }
  }
}
