import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
} from 'react-native';
import Empty from '../components/Empty';
import Separator from '../../sections/components/HorizontalSeparator'
import Category from '../components/Category'
import Layout from '../components/CategoriesListLayout'

const CategoriesList = (props) => {
  const renderEmpty = () => <Empty text='No hay sugerencias :(' />
  const itemSeparator = () => <Separator color=''/>
  const keyExtractor = item => item.id.toString();
  const renderItem = ({item}) => <Category {...item} />

  return (
    <Layout 
      title='Categorías'>
      <FlatList
      horizontal
      data={props.list}
      ListEmptyComponent={() => renderEmpty()}
      ItemSeparatorComponent={() => itemSeparator()}
      renderItem={ item => renderItem(item)}
      keyExtractor={keyExtractor}
      />
    </Layout>
  );
};


export default CategoriesList;
