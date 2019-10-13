import React from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import {w} from '../../../constants';

const ImageCard = ({data}) => {
  const {h1, cover, container, sub} = styles;
  const {name, volume, price} = data;
  console.log(name);
  return (
    <View style={{flex: 1, flexDirection: 'row',paddingTop:20}}>
      <View style={{flex: 4, }}>
        <Text style={h1}>{name.toUpperCase()}</Text>
      </View>
      <View style={{flex: 2}}>
        <Text style={h1}>{volume}</Text>
      </View>
      <View style={{flex: 2}}>
        <Text style={h1}>{price.amount.toFixed(1)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  sub: {
    shadowColor: '#000',
    shadowRadius: 8,
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 1.4,
    backgroundColor: 'gold',
    //width: w / 2,
  },
  h1: {
    fontSize: 18,
    alignItems: 'flex-start',
    textAlign: 'justify',

    //width: w / 2,
    fontWeight: '200',
    paddingRight: 10,
    paddingLeft: 10,
  },
  cover: {
    marginTop: 25,
    marginBottom: 15,
    marginLeft: 15,
    //width: w / 2.4,
    height: w * 0.63,
    borderRadius: 10,
  },
});

export {ImageCard};
