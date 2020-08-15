import React, {useRef, useState} from 'react';
import YoutubePlayer from 'react-native-youtube-iframe';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  const playerRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <YoutubePlayer
            ref={playerRef}
            height={300}
            width={400}
            videoId={'x8VYWazR5mE'}
            play={playing}
            onChangeState={event => console.log(event)}
            onReady={() => console.log('ready')}
            onError={e => console.log(e)}
            onPlaybackQualityChange={q => console.log(q)}
            volume={10}
            playbackRate={1}
            initialPlayerParams={{
              cc_lang_pref: 'us',
              showClosedCaptions: true
            }}
          />
          <Button onPress={()=>{setPlaying(!playing)}}
            title="test"
            color="#841584"/>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
