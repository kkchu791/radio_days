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
  };

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
    this.camera.recordAsync({maxDuration: 5 })
      .then(data1 => {
        FileSystem.getInfoAsync(data1.uri).then(data2 =>{


          // you could add your code here to send a mov file to auth
          //curl -F "camera=@close.mp4" -v https://cloud.hypno.com/jobs\?packageId=5dd0de7e08d52f5f4f73c9b8

          var bodyFormData = new FormData();
          var path = `@${data1.uri}`
          console.log(path, 'path')
          bodyFormData.append('camera', `@${data1}`);

          axios({
              method: 'post',
              url: 'https://cloud.hypno.com/jobs?packageId=5dd0de7e08d52f5f4f73c9b8',
              data: bodyFormData,
              headers: {'Content-Type': 'multipart/form-data' }
              }).then(function (response) {
                    //handle success
                    console.log(response, "it works well");
    })

          this.setState({ uri: data1.uri });
        })
      });
  }


  render() {
    if (this.state.uri) {
      console.log(this.state.uri, "URI")
      return (
        <View>
          <Text>This should show a video</Text>
          <Video
            source={{ uri: this.state.uri }}
            shouldPlay
            resizeMode="cover"
            style={{ width: 300, height: 300 }}
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
                    flex: 0.1,
                    alignSelf: 'flex-end',
                    alignItems: 'center',
                  }}
                  onPress={() => {
                    this.setState({
                      type:
                        this.state.type === Camera.Constants.Type.back
                          ? Camera.Constants.Type.front
                          : Camera.Constants.Type.back,
                    });
                  }}>
                  <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}> Flip </Text>
                </TouchableOpacity>
              </View>
            </Camera>
          </View>
        );
      }

    }
  }
}
