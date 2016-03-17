requirejs.config({
	paths : {
		"app" : "app",
		"api" : "api",
		//vue
		"vue" : "lib/vue/vue.min",
		//vue-resoure 远程加载数据插件
		"vue-resource" : "lib/vue-resource/vue-resource",
		"init" : "core/hcs.init",
		//常用工具类
		"util" : "core/hcs.util",
		//系统电话 短信相关
		"phone" : "core/hcs.phone",
		"domReady" : "lib/plugin/domReady/domReady",
		"zepto" : "lib/zepto/zepto.min",
		"swipe" : "swipe"
	},
	shim : {
		"api" : {
			exports : "api"
		},
		"sha1" : {
			exports : "sha1"
		}
	}
});

