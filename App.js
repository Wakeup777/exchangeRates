import React, { Component } from 'react'
import { ScrollView, View } from 'react-native'
import { Header, InformRow, TopRow } from './src/components/uikit'
import { url } from './constants'

export default class App extends Component {
  state = {
    title: 'Exchnge Rates',
    as_of: '2019-10-11T15:20:00+08:00',
    data: [],
  };

  componentDidMount = async () => {
    try {
      const response = await fetch(url);
      console.log('response1', response)
      const data1 = await response.json();
      console.log('data1', data1)

      console.log('data2', data1.stock)
      const data=data1.stock;
      this.setState({data});
      console.log('data3',data);
    } catch (e) {
      throw e;
    }
  };

  render() {

    const {title, as_of,data} = this.state;
    return (
      <View>
        <Header title={this.state.title} />
        <TopRow />
        <ScrollView style={{ backgroundColor: '#c1ecf4'}}>
          <View style={{marginBottom:150}}>
          {data.map(item => (
            <InformRow data={item} key={item.name} />
          ))}
          </View>
        </ScrollView>
      </View>
    );
  }
}
