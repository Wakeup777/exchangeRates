import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ifIphoneX} from 'react-native-iphone-x-helper';

const TopRow = () => {
  const {viewStyle, textStyle} = styles;
  return (
    <View style={viewStyle}>
      <View style={{flex: 4}}>
        <Text style={textStyle}>NAME</Text>
      </View>
      <View style={{flex: 3}}>
        <Text style={textStyle}>VOLUME</Text>
      </View>
      <View style={{flex: 3}}>
        <Text style={textStyle}>AMOUNT</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5cc1fa',
    shadowColor: '#000',
    shadowOffset: {wight: 0, height: 2},
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',
    ...ifIphoneX(
      {
        height: 40,
      },
      {
        height: 30,
      },
    ),
  },
  textStyle: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
  },
});

export {TopRow};
