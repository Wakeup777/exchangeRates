import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ifIphoneX} from 'react-native-iphone-x-helper';

const Header = ({title}) => {
  const {viewStyle, textStyle} = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{title.toUpperCase()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#45a0f4',
    paddingTop: 10,
    shadowColor: '#000',
    shadowOffset: {wight: 0, height: 2},
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',
    ...ifIphoneX(
      {
        height: 80,
        paddingTop: 30,
      },
      {
        height: 50,
        paddingTop: 12,
      },
    ),
  },
  textStyle: {
    textAlign: 'center',
    color: 'white',
    margin: 10,
    ...ifIphoneX(
      {
        fontSize: 28,
      },
      {
        fontSize: 18,
      },
    ),
  },
});

export {Header};
