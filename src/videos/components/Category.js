import React from 'react';
import{
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Platform,
} from 'react-native';

const Category = (props) => {
  return (
    <ImageBackground
    style={style.wrapper}
    source={{
      uri: props.background_image,
    }}
    >
      <Text style={style.genre}>{props.genres[0]}</Text>
    </ImageBackground>
  );
}

const style = StyleSheet.create({
  wrapper:{
    width: 250,
    height: 100,
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent:'center',
    alignItems:'center',
  },
  genre:{
    color: 'white',
    fontSize: 40,
    fontWeight:'bold',
    textShadowColor: 'rgba(0,0,0, .75)',
    textShadowOffset: {
      width: 5,
      height: 5,
    },
    ...Platform.select({
      ios:{
        textShadowRadius: 0,
      },
      android:{
        textShadowRadius: 5,
      },
    })
  }
})

export default Category;
