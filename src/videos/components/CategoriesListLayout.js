import React from 'react';
import{
  View,
  Text,
  StyleSheet,
  ImageBackground
} from 'react-native';

const CategoriesListLayout = (props) => {
  return (
    <ImageBackground
      source={require('../../../assets/background.png')}
      style={styles.container}
    >
      <Text style={styles.title}>{props.title}</Text>
      {props.children}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  title:{
    color: '#4c4c4c',
    fontSize: 20,
    fontWeight:'bold',
    marginBottom: 10,

  },
  container:{
    flex: 0,
    paddingVertical: 20,
    paddingHorizontal: 10,
  }
});

export default CategoriesListLayout;
