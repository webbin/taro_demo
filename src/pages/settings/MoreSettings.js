import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './settings.css'

export default class Index extends Component {

	componentWillMount() {
	}

	componentDidMount() {
	}

	componentWillUnmount() {
	}

	componentDidShow() {
	}

	componentDidHide() {
	}

	config = {
		navigationBarTitleText: '首页'
	}

	render() {
		return (
			<View className='index'>
				<Text>More Settings Page!</Text>
			</View>
		)
	}
}
