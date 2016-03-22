/**
 * 借助vue的双向数据绑定，实现列表数据的动态刷新
 * TODO
 * 注意这里不能用domready！，会提示加载超时
 * 估计是由于vue从中作梗，时间紧迫后续再考虑解决方案
 * @auth Frank.W
 * @date 2016/03/17
 */
//注意这里的路径是相对于你html文件的相对路径
require(['../../script/app.js'], function() {
	require(['vue', 'api','vue-resource'], function(Vue) {
		//应用vue-resource插件
		Vue.use(require('vue-resource'));
	
		var vm = new Vue({
			//需要绑定的dom节点
			el : '#serviceList',
			//初始数据
			data : {
				services : [{
					text : 'Learn JavaScript'
				}, {
					text : 'Learn Vue.js'
				}, {
					text : 'Build Something Awesome'
				}]
			},
			transition : {
				"fade":{
					enterClass: 'fadeIn',
					leaveClass: 'fadeOut'
				}
			},
			methods :{
				//刷新列表数据 ，采用vue-resource插件
				refresh : function() {
					// GET request
					var url = "http://192.168.191.1:8080/home/guess"
					this.$http.get(url).then(function(response) {
						var data = this.$get('services');
						//先判断是否存在数据 存在则进行追加
						//这里采用的模拟数据，如果实际用应该
						//获取已知数据最后一条的ID 并且根据ID和分页条数读取继续加载的数据
						if(data && data.length>1){
							data = data.concat(response.data.data) 
						}
						this.$set('services', data)
					}, function(response) {
						alert('error');
					});
				}
			}
		})
		//定义数据加载效果
		Vue.transition('fade', {
		  enterClass: 'fadeIn',
		  leaveClass: 'fadeOut'
		})
		//      调用api的地方要放到下面
		//		注意这里不能用domready！，会提示加载超时
		//		估计是由于vue从中作梗，时间紧迫后续再考虑解决方案
		//      apiready=function(){
		//        	api.alert({
		//	        	title : '111',
		//	        	msg : 'mmmm'
		//			},function(ret, err) {
		//				//coding...
		//			});
		//      }

	});
});
