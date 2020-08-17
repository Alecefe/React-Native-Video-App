import React, { useEffect, useState } from 'react';
import {
Text,
View,
StyleSheet,
} from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';

import Home from './src/screens/containers/Home';
import Header from './src/sections/components/Header';
import SuggestionsList from './src/videos/containers/SuggestionsList';
import API from './src/utils/api';
import CategoriesList from './src/videos/containers/CategoriesList';
import Player from './src/player/containers/Player'

type Props = {};
const App: () => React$Node = () => {
  
  const [suggestions, setSuggestions] = useState([]); 
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    (async function getMoviesData() {
      const [movies, categories] = await Promise.all([
        API.getSuggestions(10), 
        API.getMovies()
      ])
      .catch(reason => console.log('Hemos fallado'))
      console.log(movies);
      console.log(categories)
      setSuggestions(movies);
      setCategories(categories);
    })();
  },[]);

  return (
    <PaperProvider>
      <Home>
        <Header />
        <Player />
        <Text>Buscador</Text>
        <CategoriesList list={categories} />
        <SuggestionsList list={suggestions} />
      </Home>
    </PaperProvider>  
  );
};

export default App;
