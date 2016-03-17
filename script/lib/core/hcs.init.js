/**
 *初始化各种事件以及参数
 * @author frank.wu 
 */
define(['api'], function() {
	//初始化退出事件
	function initExit() {
	 	var mkeyTime=new Date().getTime();
		api.addEventListener({
			name : 'keyback'
		}, function(ret, err) {
//			api.toast({
//				msg : '再按一次返回键退出应用',
//				duration : 2000,
//				location : 'bottom'
//			});
			//如果当前时间减去标志时间大于2秒，说明是第一次点击返回键，反之为2秒内点了2次，则退出。
            if((new Date().getTime() - mkeyTime) > 2000){
                mkeyTime = new Date().getTime();
                api.toast({
					msg : '再按一次返回键退出应用',
					duration : 2000,
					location : 'bottom'
				});
            }else{
                api.closeWidget({
					id : 'A6905899130903', 
					retData : {
						name : 'closeWidget'
					},
					silent : true
				});
            }

			initExit(function() {
				exitApp();
			}, 2000)
		});

	}

	return {
		initExit : initExit
	};
});
