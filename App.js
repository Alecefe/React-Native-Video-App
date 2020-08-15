import React, { Component, useEffect, useState } from 'react';
import {
Text
} from 'react-native';

import Home from './src/screens/containers/Home';
import Header from './src/sections/components/Header';
import SuggestionsList from './src/videos/containers/SuggestionsList';
import API from './src/utils/api';
import CategoriesList from './src/videos/containers/CategoriesList';

type Props = {};
const App: () => React$Node = () => {
  
  const [suggestions, setSuggestions] = useState([]); 
  const [categories, setCategories] = useState([]);

  

  useEffect(() => {
    (async function getMoviesData() {
      const [movies, categories] = await Promise.all[API.getSuggestions(10), API.getMovies()];
      console.log(movies);
      console.log(categories)
      setSuggestions(movies);
      setCategories(categories);
    })();
  },[]);

  return (
    <Home>
      <Header>
      </Header>
      <Text>Buscador</Text>
      <Text>Categorias</Text>
      <SuggestionsList list={suggestions} />
      <CategoriesList list={categories} />
    </Home>
  );
};


export default App;
