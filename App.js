import React, { Component } from 'react'
import {
  ActivityIndicator,
  Alert,
  Button,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native'
import { ColorCode, Header, InformRow, TopRow } from './src/components/uikit'
import { url } from './constants'

export default class App extends Component {
  state = {
    title: 'Exchnge Rates',
    data: [],
    isLoading: true,
    colorHolder: '#00BCD4',
  };

  componentDidMount = async () => {
    try {
      const response = await fetch(url);
      const data1 = await response.json();
      this.setState({
        data: data1.stock,
        isLoading: false,
      });
    } catch (e) {
      Alert.alert('network connection failed')
      console.log(e.name)
      console.log(e.message)
      console.log(e.stack)
    }
    this.timerID = setInterval(() => this.reFresh(), 10000)
  };

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  ChangeColorFunction = () => {
    this.setState({
      colorHolder: ColorCode(),
    });
  };

  reFresh = async () => {
    try {
      //Alert.alert('second')
      const response = await fetch(url);
      const data1 = await response.json();
      this.setState((state, props) => {
        return {
          as_of: data1.as_of,
          data: data1.stock,
          isLoading: false,
        };
      });
      this.ChangeColorFunction();
    } catch (e) {
      Alert.alert('network connection failed')
      console.log(e.name)
      console.log(e.message)
      console.log(e.stack)
    }
  };

  render() {
    const { viewLoading, viewStyle } = styles
    const { title, data, isLoading, colorHolder } = this.state

    if (isLoading) {
      return (
        <View style={viewLoading}>
          <ActivityIndicator size="large" color="white" />
        </View>
      );
    }
    return (
      <View style={{flex: 1}}>
        <View style={viewStyle}>
          <Header title={title} />
          <TopRow />
          <ScrollView>
            <View>
              {data.map(item => (
                <InformRow data={item} key={item.name} />
              ))}
            </View>
          </ScrollView>
        </View>
        <View
          style={{
            backgroundColor: colorHolder,
            flex: 1,
            justifyContent: 'flex-start',
          }}>
          <Button
            title={'Refresh now'}
            large
            color="#c1ecf4"
            onPress={this.reFresh}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewLoading: {
    flex: 1,
    backgroundColor: 'silver',
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewStyle: {
    flex: 15,
    backgroundColor: '#999',
  },
});
