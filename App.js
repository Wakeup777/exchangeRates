import React, { Component } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { Header, InformRow, TopRow } from './src/components/uikit'
import { url } from './constants'

export default class App extends Component {
	state = {
		title: 'Exchnge Rates',
		as_of: '',
		data: [],

	}


	componentDidMount = async () => {
		try {
			const response = await fetch(url)
			const data1 = await response.json()
			const data = data1.stock
			this.setState({ data })
			const as_of = data1.as_of
			this.setState({ as_of })

		} catch (e) {
			throw e
		}
	}

	render () {
		const { viewStyle, viewStyleSecond } = styles
		const { title, data, as_of } = this.state
		return (
			<View style={viewStyle}>
				<Header title={title}/>
				<TopRow/>
				<ScrollView >
					<View style={viewStyleSecond}>
						{data.map(item => (
							<InformRow data={item} key={item.name}/>
						))}
					</View>
				</ScrollView>

			</View>

		)
	}
}

const styles = StyleSheet.create({
	viewStyle: {
		backgroundColor: '#999',
		height: 820,
	},
	viewStyleSecond: {
		marginBottom: 250,
	},
})
