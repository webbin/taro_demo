
import Taro from '@tarojs/taro'
import PagePath from "./PagePath";

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

