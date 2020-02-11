
import Taro from '@tarojs/taro'
import AppConfig from "../AppConfig";


const PagePath = AppConfig.pages;

const getPageUrl = (path) => {
	return '/' + path;
};

const PateRouter = {
	goToMoreSettings: () => {
		Taro.navigateTo({
			url: getPageUrl(PagePath[1]),
		});
	},
};


export default PateRouter;

