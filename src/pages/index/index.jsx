import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import './index.css'
import PateRouter from "../PageRoute";

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
	};

	onClick = () => {
		// 跳转到目的页面，打开新页面
		// Taro.navigateTo({
		//   url: '/pages/settings/MoreSettings'
		// });
		PateRouter.goToMoreSettings();
	};


	fetchNet = () => {
		Taro.request({
			url: 'https://www.baidu.com'
		}).then((response) => {
			return response.text();
		}).then((text) => {
			console.log(text);
		}).catch((err) => {
			console.log(err);
		});
	};

	render() {
		return (
			<View className='index'>
				<Text className='big_text'>
					Hello world!
				</Text>

				<Button onClick={this.onClick}>
					Go To More Settings
				</Button>

				<Button onClick={this.fetchNet}>
					Network
				</Button>
			</View>
		)
	}
}
