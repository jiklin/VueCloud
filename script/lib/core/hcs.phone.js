/***
 * 一个工具类,调用设备通话相关接口
 * author : Frank.W
 */
define(function() {
	require(['api']);
	/**
	 * @param {Object} id     需要绑定的目标id
	 * @param {Object} number 需要呼叫的号码
	 */
	function call(id, number) {
		$api.addEvt($api.byId(id), 'click', function() {
			api.call({
				type : 'tel_prompt',
				number : number
			});
		});
	}
	
	/**
	 * 调用系统 短信发送短信
	 * @param {Object} number 发送号码
	 * @param {Object} text	      发送内容
	 */
	function sms(number, text,callback){
		api.showProgress();//显示加载进度框
		api.sms({
			numbers : number,
			text : text,
			silent : true
		},function(ret,err){
			api.hideProgress();//显示加载进度框
        	callback(ret);
        });
	}

	//初始化发短信功能
	return {
		call : call,
		sms : sms
	};
});
