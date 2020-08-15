import React, { Component } from 'react';
import {
  FlatList,
  Text,
} from 'react-native';
import Layout from '../components/SuggestionListLayout';
import Empty from '../components/Empty';
import Separator from '../components/VerticalSeparator'
import Suggestion from '../components/Suggestion'


class SuggestionsList extends Component {
  renderEmpty = () => <Empty text='No hay sugerencias :(' />
  itemSeparator = () => <Separator color=''/>
  keyExtractor = item => item.id.toString();
  renderItem = ({item}) => <Suggestion {...item} />

  render() {
    return(
      <Layout
        title='Recomendado para ti'
        >
        <FlatList
          keyExtractor={this.keyExtractor}
          data={this.props.list}
          ListEmptyComponent={() => this.renderEmpty()}
          ItemSeparatorComponent={() => this.itemSeparator()}
          renderItem={(item) => this.renderItem(item)}
        />
      </Layout>
    );
  }
}

export default SuggestionsList;