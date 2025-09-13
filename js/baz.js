functionck() {
	console.profile();
	console.profileEnd();
	//我们判断一下profiles里面有没有东西，如果有，肯定有人按F12了，没错！！
	if (console.clear) {
		console.clear()
	};
	if (typeofconsole.profiles == "object") {
		returnconsole.profiles.length > 0;
	}
}
functionhehe() {
	if ((window.console && (console.firebug || console.table && /firebug/i.test(console.table()))) || (typeofopera == 'object' && typeofopera.postError == 'function' && console.profile.length > 0)) {
		fuckyou();
	}
	if (typeofconsole.profiles == "object" && console.profiles.length > 0) {
		fuckyou();
	}
}
hehe();
window.onresize = function() {
	if ((window.outerHeight - window.innerHeight) > 200)
	//判断当前窗口内页高度和窗口高度，如果差值大于200，那么呵呵
	fuckyou();
}
//需要注意的是这个方法对火狐是没用的。
//第二种：禁止鼠标右键，代码如下：
document.oncontextmenu = function(e) {
	returnfalse;
};

//第三种：禁止复制文字（保护文章版权），代码如下：
document.onselectstart = function(e) {
	returnfalse;
};

//第四种：防f12和右键（推荐使用）
functionclick(e) {
	if (document.all) {
		if (event.button == 2 || event.button == 3) {
			alert("你好，欢迎访问文天玩WenTianPlay最边缘的官网！");
			oncontextmenu = 'returnfalse';
		}
	}
	if (document.layers) {
		if (e.which == 3) {
			oncontextmenu = 'returnfalse';
		}
	}
}
if (document.layers) {
	document.captureEvents(Event.MOUSEDOWN);
}
document.onmousedown = click;
document.oncontextmenu = newFunction("returnfalse;") document.onkeydown = document.onkeyup = document.onkeypress = function() {
	if (window.event.keyCode == 123) {
		window.event.returnValue = false;
		return (false);
	}
}