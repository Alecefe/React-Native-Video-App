import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
} from 'react-native';

const Suggestion = (props) => {
  let genre = (props.genres) ? props.genres[0] : 'No category';

  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Image 
          style={styles.cover}
          source={{
            uri: props.medium_cover_image
          }}
        />
        <View style={styles.genre}>
          <Text style={styles.genreText}>{genre}</Text>
        </View>
      </View>
      <View style={styles.right}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.year}>{props.year}</Text>
        <Text style={styles.rating}>{props.rating}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  left: {
    alignItems:'center',
  },
  right: {
    justifyContent:'space-between',
    paddingLeft: 10,
  },
  cover: {
    height: 150,
    width: 100,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 18,
    color: '#44546b'
  },
  year: {
    backgroundColor: '#70b124',
    paddingVertical: 4,
    paddingHorizontal: 6,
    color: 'white',
    fontSize: 11,
    borderRadius: 5,
    overflow: 'hidden', //Por si el borde molesta
    alignSelf: 'flex-start',
  },
  rating: {
    color: '#6b6b6b',
    fontSize: 14,
    fontWeight: 'bold',
  },
  genre: {
    position: 'absolute',
    left: 0,
    top: 0,
    backgroundColor: 'black',
    paddingVertical: 5,
    paddingHorizontal: 7,
  },
  genreText: {
    color: 'white',
    fontSize: 11,
  },
})

export default Suggestion;