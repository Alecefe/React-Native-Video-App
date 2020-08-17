import React from 'react';
import {
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Text,
  StyleSheet,
} from 'react-native';
import { IconButton, Colors } from 'react-native-paper';

const PlayPause = (props) => {
  return(
    <TouchableWithoutFeedback
      style={styles.container}
      hitSlop={{
        left: 5,
        top: 5,
        bottom: 5,
        right: 5,
      }}
    > 
      <IconButton 
        icon={props.paused ? 'play' : 'pause'}
        mode='text' 
        color={Colors.white}
        size={30}
        style={styles.button}
        onPress={props.onPress}
      />
    </TouchableWithoutFeedback>  
  );
};

const styles = StyleSheet.create({
  button:{
    // backgroundColor: 'green',
    height:30,
    width: 50,
  },
  container: {
    // justifyContent:'center',
    // paddingHorizontal: 10,
    // height: 25,
    // marginRight: 20,
    // marginVertical: 5,
    // backgroundColor: 'rgba(0,0,0,0)',
  }
  
})
export default PlayPause;
