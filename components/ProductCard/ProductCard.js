import React from 'react';
import {View, Text, Image} from 'react-native';

import style from './ProductCard.style';
export default function ({product}) {
  return (
    <View style={style.container}>
      <Image style={style.image} source={{uri: product.imgURL}} resizeMode="contain" />
      <Text style={style.title}>{product.title}</Text>
      <Text style={style.price}>{product.price}</Text>
    </View>
  );
}
