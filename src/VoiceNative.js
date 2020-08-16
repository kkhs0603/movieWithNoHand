import React from 'react';
import YoutubePlayer from 'react-native-youtube-iframe';

import {
  StyleSheet,
  Text,
  View,
  Button,
  AppRegistry,
} from 'react-native';

import Voice from 'react-native-voice';

class VoiceNative extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      playing: false,
    };

    Voice.onSpeechStart = this.onSpeechStart.bind(this);
    Voice.onSpeechRecognized = this.onSpeechRecognized.bind(this);
    Voice.onSpeechResults = this.onSpeechResults.bind(this);
    Voice.onSpeechPartialResults = this.onSpeechPartialResults.bind(this);
    Voice.onError = this.onError.bind(this);
  }

  componentWillUnmount() {
    Voice.destroy().then(Voice.removeAllListeners);
  }
  componentDidMount() {
    //this._startRecognition.bind(this);
  }

  onError(e) {
    console.log('_onSpeechError');
    console.log(event.error);
  }

  onSpeechStart(e) {
    console.log(e);
  };

  onSpeechRecognized(e) {
    console.log(e);
  };

  onSpeechPartialResults = (e) => {
    console.log('onSpeechPartialResults: ', e);
    this.setState({
      partialResults: e.value,
    });
  };

  onSpeechResults(e) {
    console.log(e);
    this.setState({
      results: e.value[0],
    });
    if(e.value[0].includes('スタート')){
      this.setState({
        playing: true,
      });
    }
    if(e.value[0].includes('ストップ')){
      this.setState({
        playing: false,
      });
    }
    //this.props.control(e.value[0]);
  }

  async _startRecognition(e) {
    console.log('button push')
    this.setState({
      results: [],
    });
    try {
      await Voice.start('ja-JP');
    } catch (e) {
      console.error(e);
    }
  }

  render () {
    return (
      <View>
        <YoutubePlayer
          height={300}
          width={400}
          videoId={'x8VYWazR5mE'}
          play={this.state.playing}
          // onChangeState={event => console.log(event)}
          // onReady={() => console.log('ready')}
          // onError={e => console.log(e)}
          // onPlaybackQualityChange={q => console.log(q)}
          volume={10}
          playbackRate={1}
          initialPlayerParams={{
            cc_lang_pref: 'us',
            showClosedCaptions: true
          }}
        />
        
        <Button
          onPress={this._startRecognition.bind(this)}
          title="音声認識"
        />
        <Text> {this.state.results}</Text>
      </View>
    );
  }
}

export default VoiceNative;
