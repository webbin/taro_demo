import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button, Image } from '@tarojs/components'
import './index.css'
import PateRouter from "../PageRoute";
import HomeLockImage from "../home/HomeLockImage";
import bg from '../../resource/home/bg.png';

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
			// url: 'https://www.baidu.com'
			url: 'http://127.0.0.1:1087'
		}).then((response) => {
			console.log(response);
			return response.text();
		}).then((text) => {
			console.log(text);
		}).catch((err) => {
			console.log(err);
		});
	};

	render() {
		return (
			<View className='container'>
				<HomeLockImage />
				<Button className='home_buttons' onClick={this.onClick}>
					Go To More Settings
				</Button>
				<Button className='home_buttons' onClick={this.fetchNet}>
					Network
				</Button>
			</View>
		)
	}
}
