import React, { Component } from 'react'
import {
  ActivityIndicator,
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
    ColorHolder: '#00BCD4',
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
      throw e;
    }
    this.timerID = setInterval(() => this.reFresh(), 5000)
  };

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  ChangeColorFunction = () => {
    this.setState({
      ColorHolder: ColorCode(),
    });
  };

  reFresh = async () => {
    try {
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
      //Alert.alert('refreshing')
    } catch (e) {
      throw e;
    }
  };

  render() {
    const { viewLoading, viewStyle, viewStyleSecond } = styles
    const { title, data, isLoading } = this.state

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
          style={viewStyleSecond}>
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
  viewStyleSecond: {
    backgroundColor: this.stateColorHolder,
    flex: 1,
    justifyContent: 'flex-start',
  },
});
