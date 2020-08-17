import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import Slider from '@react-native-community/slider';
import { Colors } from 'react-native-paper';

const ProgBar = (props) => {
  const totalSeconds = Number(props.time.mLeft)*60 + Number(props.time.sLeft) + Number(props.time.mPlayed)*60 + Number(props.time.sPlayed);
  const totalSecondsPlayed = Number(props.time.mPlayed)*60 + Number(props.time.sPlayed);

  return(
    <View style={styles.container}>
      <Slider 
        style={styles.slider}
        minimumValue={0}
        maximumValue={totalSeconds}
        minimumTrackTintColor={Colors.greenA400}
        maximumTrackTintColor={Colors.black}
        thumbTintColor={Colors.green500}
        value={totalSecondsPlayed}
        onSlidingComplete={props.onSlidingComplete}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 5,
    // backgroundColor:'white',
  },
  slider:{
    height: 40,
    width: 200,
  }
})

export default ProgBar;
