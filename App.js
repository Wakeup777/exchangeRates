import React, {Component} from 'react';
import {View, ScrollView,Text} from 'react-native';
import {Header, ImageCard, Layout} from './src/components/uikit';
import {url} from './constants';

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
    console.log('stock12',data)
    console.log('state12',this.state)
    return (
      <View>
        <Header title={this.state.title} />
        <Header title={"  name    volume  amount "} />
        <ScrollView>
          {data.map(item => (
            <ImageCard data={item}/>
          ))}
        </ScrollView>
      </View>
    );
  }
}
