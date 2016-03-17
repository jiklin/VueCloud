/**
 * 入口文件、初始化tab页
 * @auth Frank.W
 * @date 2016/03/17 
 */
//注意这里的路径是相对于你html文件的相对路径
require(['./script/app.js'], function() {
	require(['domReady!', 'api'], function() {
		var scrollHeight = $api.byId('navbar').offsetHeight;
		api.openFrameGroup({
			name : 'message',
			background : '#FFF',
			rect : {
				x : 0,
				y : scrollHeight,
				w : "auto",
				h : "auto"
			},
			index : 1,
			frames : [{
				name : 'left',
				url : 'html/service/index.html',
				bounces : false,
			}, {
				name : 'center',
				url : 'html/center/index.html',
				bounces : false,
			}, {
				name : 'right',
				url : 'html/homepage.html',
				bounces : false,
			}]
		}, function(ret) {
			setFrameGroupStatus(ret.index);
		});
//		TODO 此处需要进行优化
//		var navList = $api.domAll('#navbar li');
//		//按钮循环绑定事件
//		for (var i = 0, len = navList.length; i < len; i++) {
//			//绑定按钮事件
//			(function() {
//				var tag = navList[i];
//				$api.addEvt(tag, 'click', function() {
//					setFrameGroupIndex(i);
//				});
//			})(i);
//		}
		var left = $api.byId("left"),
			center = $api.byId("center"),
			right = $api.byId("right");
			
		$api.addEvt(left, 'click', function() {
			setFrameGroupIndex(0);
		});
		$api.addEvt(center, 'click', function() {
			setFrameGroupIndex(1);
		});
		$api.addEvt(right, 'click', function() {
			setFrameGroupIndex(2);
		});
		
		function setFrameGroupIndex(frameIndex) {
			api.setFrameGroupIndex({
				name : 'message',
				index : frameIndex,
				scroll : true
			});
		}

		function setFrameGroupStatus(frameIndex) {
			var navmark = $api.byId('navmark'),	
				left = $api.byId("left"),
				center = $api.byId("center"),
				right = $api.byId("right");
			
			switch (frameIndex) {
				case 0: {
					left.className = "active";
					center.className = "";
					right.className = "";
					break;
				}
				case 1: {
					left.className = "";
					center.className = "active";
					right.className = "";
					break;
				}
				case 2: {
					left.className = "";
					center.className = "";
					right.className = "active";
					break;
				}
				default:break;
			}
		}

	});
});
