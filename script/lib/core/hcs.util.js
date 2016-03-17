/***
 * 一个工具类
 * author : Frank.W
 */
define(function() {
	require(['api']);
	/**
	 * 检测是否有网络链接，如果没有给出toast提示
	 * 同时返回 true/false值
	 */
	function checkNetToast() {
		var connectionType = api.connectionType;
		if ("none" == connectionType || "unknown" == connectionType) {
			api.toast({
				msg : '未检测到网络链接,请检查网络链接后重试 :)',
				duration : 2000,
				location : 'middle'
			});
			return false;
		} else {
			return true;
		}
	}
	/**
	 * 检测是否有网络链接，如果没有配合页面给出提示
	 * 这个方法会每隔1000毫秒检测一次
	 * 同时返回 true/false值
	 */
	function checkNetToolTip() {
		setInterval(function() {
			var connectionType = api.connectionType;
			var netBlock = $api.byId("net-status");
			if ("none" == connectionType || "unknown" == connectionType) {
				var isHidden = $api.hasCls(netBlock, "hidden");
				if (isHidden) {
					$api.removeCls(netBlock, "hidden");
				}
				return false;
			} else {
				if (!$api.hasCls(netBlock, "hidden")) {
					$api.addCls(netBlock, "hidden");
				}
				return true;
			}
		}, 1000)
	}

	//返回按钮
	function returnBack() {
		api.historyBack({
			frameName : 'index'
		}, function(ret, err) {
			if (!ret.status) {
				api.closeWin();
			}
		});
	}
	
//	function sha1() {
//		api.loadSecureValue({key:'appKey'},function(ret,err){
//			var appkey = ret.value;
//			api.loadSecureValue({key:'salt'},function(ret,err){
//				var salt = ret.value;
//				
//				alert(appkey); 
//				alert(salt); 
//			})
//		});
//	}
		
	return {
		returnBack : returnBack,
		checkNetToast : checkNetToast,
		checkNetToolTip : checkNetToolTip

	};
});
