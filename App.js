import React, { Component } from 'react'
import { ScrollView, View } from 'react-native'
import { Header, InformRow, TopRow } from './src/components/uikit'
import { url } from './constants'

export default class App extends Component {
  state = {
    title: 'Exchnge Rates',
    as_of: '',
    data: [],
  };

  componentDidMount = async () => {
    try {
      const response = await fetch(url);
      const data1 = await response.json();
      this.setState({ data });
    } catch (e) {
      throw e;
    }
  };

  render() {
    const { title, data}  = this.state;
    return (
      <View>
        <Header title={title} />
        <TopRow />
        <ScrollView style={{ backgroundColor: '#c1ecf4' }}>
          <View style={{ marginBottom: 150 }}>
          {data.map(item => (
            <InformRow data={item} key={item.name} />
          ))}
          </View>
        </ScrollView>
      </View>
    );
  }
}
