import React from 'react';
import { Text, View, TouchableOpacity, Dimensions } from 'react-native';
import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';
import { Video } from 'expo-av';
import * as FileSystem from 'expo-file-system';
//import { FileSystem } from 'expo';
import axios from 'axios';


async function sendVideo(data) {
  url = 'https://storage.googleapis.com/upload/storage/v1/b/radio-days-audio-files/o?uploadType=media&name=Video';
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      "Authorization": "Bearer ya29.Il-xB2SCldymUQJ5GRgVdZE4yqoYgTkIOCAsTksccqyus9tsU1TpEpEQPDBKMLc65_uPO7OuWcAOtYanqB4gXbhUj65kaekdmHlWO-LHbjc1IFe1Y3FnNHKN5yVH3IU4SA",
    },
    body: data
  })
  .then((resp) => console.log(resp));
}

// async function sendVideoHypno(data) {
//   const body = new FormData()
//   body.append("camera", `@${data}`);
  
//   await axios("https://cloud.hypno.com/jobs?packageId=5dd1725b08d52f69905d16e1", {
//     method: 'POST',
//     body,
//     headers: {
//       "Content-Type": "multipart/form-data"
//     }
//   })
//   .then((resp) => console.log(resp));
// }


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
      sendVideo(this.state.uri);
      // sendVideoHypno(this.state.uri);
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
