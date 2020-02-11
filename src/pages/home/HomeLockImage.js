

import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button, Image } from '@tarojs/components'

import bg from '../../resource/home/bg.png';
import './home_lock_image.css';

class HomeLockImage extends Component {

	render() {
		return (
			<View className='lock_view'>
				<Image className='lock_image' src={bg} />
				<Text className='image_text'>
					Image View
				</Text>
			</View>
		);
	}
}

export default HomeLockImage;
