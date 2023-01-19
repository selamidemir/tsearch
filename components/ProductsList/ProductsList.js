import React from 'react';
import {FlatList, Text} from 'react-native';

import SearchBox from '../SearchBox';

import style from './ProductsList.style';
import {products} from '../../assets/products';
import ProductCard from '../ProductCard';

export default function ProductsList() {
  const renderProducts = ({item}) => <ProductCard product={item} />;

  return (
    <FlatList
      ListHeaderComponent={<SearchBox />}
      //   keyExtractor={keyExtractor}
      data={products}
      renderItem={renderProducts}
      style={ style.container}
      numColumns={2}
    />
  );
}
