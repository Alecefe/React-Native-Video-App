import React from 'react';
import{
  View,
  StyleSheet,
} from 'react-native';
import { IconButton, Colors } from 'react-native-paper';

const FullscreenButton = (props) => {
  return (
    <View>
      <IconButton 
        icon={props.isFullscreen ? 'fullscreen-exit' : 'fullscreen'}
        mode='text' 
        color={Colors.white}
        size={30}
        style={styles.button}
        onPress={props.onPress}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  button:{
    // backgroundColor: 'green',
    height:30,
    width: 50,
  },
})

export default FullscreenButton;
