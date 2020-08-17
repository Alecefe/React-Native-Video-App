import React, { useState } from 'react';
import Video from 'react-native-video';
import {
  StyleSheet,
  ActivityIndicator,
  Text,
} from 'react-native';
import Layout from '../components/Layout';
import ControlLayout from  '../components/ControlLayout';
import PlayPause from  '../components/PlayPause';
import ProgressBar from '../components/ProgressBar'
import FullscreenButton from '../components/FullscreenButton'

const Player = () => {
  const [ playerState, setPlayerState ] = useState({
    loading: true,
    paused: false,
    fullscreen: false,
    time: {
      mPlayed: '0',
      sPlayed: '0',
      mLeft: '0',
      sLeft: '0',
    }
  })
  
  const onBuffer = ({ isBuffering }) => {
    setPlayerState({
      ...playerState,
      loading: isBuffering
    });
  }

  const onLoad = () =>{
    setPlayerState({
      ...playerState,
      loading: false,
    });
  }

  const playPause = () => {
    const togglePause = !playerState.paused;
    setPlayerState({
      ...playerState,
      paused: togglePause,
    });
  }

  const fullscreen = () => {
    const toogleFs = !playerState.fullscreen;
    setPlayerState({
      ...playerState,
      fullscreen: toogleFs,
    });
  }

  const onProgress = (data) => {
    const minutesPlayed = Math.trunc(data.currentTime/60).toString();
    const secondsPlayed = Math.trunc(data.currentTime % 60).toString();
    const minutesLeft = Math.trunc((data.seekableDuration - minutesPlayed) /60).toString();
    const secondsLeft = Math.trunc((data.seekableDuration  - secondsPlayed) % 60).toString();
    // console.log(minutesPlayed, secondsPlayed, minutesLeft, secondsLeft);
    setPlayerState({
      ...playerState,
      time: {
        mPlayed: minutesPlayed,
        sPlayed: secondsPlayed,
        mLeft: minutesLeft,
        sLeft: secondsLeft,
      }
    })
  }

  const onSlidingComplete = (value) =>{
    console.log(value);
    // if(this.videoRef){
    //   this.videoRef.seek(value, 2)

    // }
  }

  return(
    <Layout
      video={
        <Video 
        ref={ref =>{this.videoRef = ref}}
        source={{uri:'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4'}} //{require('../../../assets/bbbunny.mp4')}
        style={styles.video}
        resizeMode="contain"
        onBuffer={onBuffer}
        onLoad={onLoad}
        paused={playerState.paused}
        fullscreen={playerState.fullscreen}
        fullscreenAutorotate
        fullscreenOrientation='landscape'
        onProgress={onProgress}
        progressUpdateInterval={1000}
        />
      }
      loading={playerState.loading}
      loader={
        <ActivityIndicator color='green' />
      }
      controls={
        <ControlLayout>
          <PlayPause 
            onPress={playPause}
            paused={playerState.paused}
          />
          <ProgressBar 
           time={playerState.time} 
           videoRef = {this.videoRef}
          />
          <Text 
          style={styles.counter}
          >{`${playerState.time.mPlayed}:${(Number(playerState.time.sPlayed)<10)?'0'+playerState.time.sPlayed:playerState.time.sPlayed} / ${playerState.time.mLeft}:${(Number(playerState.time.sLeft)<10) ? '0' + playerState.time.sLeft : playerState.time.sLeft}`}
          </Text>
          <FullscreenButton 
            onPress={fullscreen}
            isFullscreen={playerState.fullscreen}
          />
        </ControlLayout>
      }
    >
    </Layout>
  )
}

const styles = StyleSheet.create({
  video:{
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  counter:{
    color:'#ffffff',
    fontWeight: 'bold',
  }
})

export default Player;
