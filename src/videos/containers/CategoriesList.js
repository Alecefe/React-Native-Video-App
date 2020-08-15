import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
} from 'react-native';
import Empty from '../components/Empty';
import Separator from '../components/VerticalSeparator'
import Suggestion from '../components/Suggestion'

const CategoriesList = (props) => {
  const renderEmpty = () => <Empty text='No hay sugerencias :(' />
  const itemSeparator = () => <Separator color=''/>
  const keyExtractor = item => item.id.toString();
  const renderItem = ({item}) => <Suggestion {...item} />

  return (
    <FlatList
    data={props.list}
    ListEmptyComponent={() => renderEmpty()}
    ItemSeparatorComponent={() => itemSeparator()}
    renderItem={(item) => renderItem(item)}
    keyExtractor={keyExtractor}
  />

  );
};

export default CategoriesList;
