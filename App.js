import React, { Component } from 'react'
import {
	ActivityIndicator,
	Button,
	ScrollView,
	StyleSheet,
	View,
	Alert
} from 'react-native'
import { Header, InformRow, TopRow } from './src/components/uikit'
import { url } from './constants'

export default class App extends Component {
	state = {
		title: 'Exchnge Rates',
		as_of: '',
		data: [],
		isLoading: true,
		ColorHolder: '#00BCD4',

	}




	componentDidMount = async () => {
		try {
			const response = await fetch(url)
			const data1 = await response.json()

			this.setState({
				as_of: data1.as_of,
				data: data1.stock,
				isLoading: false,
			})

		} catch (e) {
			throw e
		}
		this.timerID = setInterval(() => this.reFresh(), 3000)
	}

	componentWillUnmount () {
		clearInterval(this.timerID)
	}

	ChangeColorFunction = () => {

		var ColorCode = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' +
			(Math.floor(Math.random() * 256)) + ',' +
			(Math.floor(Math.random() * 256)) + ')'
		this.setState({
			ColorHolder: ColorCode,
		})
	}
	reFresh = async () => {

		try {
			const response = await fetch(url)
			const data1 = await response.json()

			this.setState((state, props) => {
				return {
					as_of: data1.as_of,
					data: data1.stock,
					isLoading: false,

				}
			})
			this.ChangeColorFunction()
			//Alert.alert('refreshing')
		} catch (e) {
			throw e
		}
	}

	render () {
		const { viewStyle, viewStyleSecond } = styles
		const { title, data, as_of, isLoading,ColorHolder } = this.state

		if (isLoading) {
		return (
			<View style={{
				flex: 1,
				backgroundColor: 'silver',
				justifyContent: 'center',
				alignItems: 'center',
			}}>
				<ActivityIndicator size="large" color='white'/>
			</View>
		)
		}

		return (
			<View style={{ flex: 1 }}>
				<View style={viewStyle}>
					<Header title={title}/>
					<TopRow/>
					<ScrollView>
						<View style={viewStyleSecond}>
							{data.map(item => (
								<InformRow data={item} key={item.name}/>
							))}
						</View>
					</ScrollView>

				</View>
				<View style={{
					backgroundColor: ColorHolder,
					flex: 1,
					justifyContent: 'flex-start',
				}}>
					<Button title={'Refresh now'}
									large
									color='#c1ecf4'
									onPress={this.reFresh}/>

				</View>
			</View>

		)
	}
}

const styles = StyleSheet.create({
	viewStyle: {
		flex: 15,
		backgroundColor: '#999',
		// height: 820,

	},
	viewStyleSecond: {},
})
