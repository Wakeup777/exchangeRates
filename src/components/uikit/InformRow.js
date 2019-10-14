import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const InformRow = ({ data }) => {
  const { h1, h2, container } = styles
  const { name, volume, price } = data
  console.log(name);
  return (
    <View style={container}>
      <View style={{ flex: 4, }}>
        <Text style={h2}>{name.toUpperCase()}</Text>
      </View>
      <View style={{ flex: 3 }}>
        <Text style={h1}>{volume}</Text>
      </View>
      <View style={{ flex: 3 }}>
        <Text style={h1}>{price.amount.toFixed(2)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 15,
    height: 50,
    backgroundColor: '#c1ecf4',
    shadowColor: '#1e21f4',
    shadowOffset: { wight: 1, height:2  },
    shadowOpacity: 0.3,


  },
  h1: {
    fontSize: 20,
    alignItems: 'center',
    textAlign: 'center',

    fontWeight: '200',
    paddingRight: 10,
    paddingLeft: 10,
  },
  h2: {
    fontSize: 20,
    alignItems: 'center',
    textAlign: 'left',

    fontWeight: '200',
    paddingRight: 10,
    paddingLeft: 10,


  },

});

export {InformRow};
