(function() {
	createWindow = function(options) {
		var wid = "fy_win_" + parseInt(Math.random()*100);
		var opts = $.extend({title:wid},options);
		var $window = $("<div id='" + wid + "' class='window'>" +
		"<h1 class='title'>" + opts.title + "<span></span><i class='close'></i></h1>" +
		"<span class='drag'></span>" + "</div>");
		$("body").append($window);
		$window.width(opts.width).height(opts.height).css({left:opts.x,top:opts.y});
		initEvent(wid);
	};
	var zIndex = 0;
	function initEvent(wid) {
		var $win = $("#" + wid);
		function init() {
			_left = $win.offset().left; // 初始的横坐标(上偏移值)
			_top = $win.offset().top; // 初始的纵坐标(左偏移值)
			_width = $win.width(); // 初始的宽度
			_height = $win.height(); // 初始的高度
			w = _width; // 操作后的宽度
			h = _height; // 操作后的宽度
			l = _left; // 操作后的横坐标(上偏移值)
			t = _top; // 操作后的纵坐标(左偏移值)
			_w =$(window).width();
			_h =$(window).height();
			_l = _w - w;
			_t = _h - h;
		}
		function setTitle() {
			$win.find(".title").find("span").text("(w:" + w + ",h:" + h + ",x:" + l + ",y:" + t + ")");
		}
		init();
		setTitle();
		// 点击窗口（置顶）
		$win.mousedown(function() {
			$win.css("zIndex", ++zIndex);
		});
		// 移动窗口
		$win.find(".title").mousedown(function(e) {
			init();
			var x = e.clientX; // 初始的横坐标
			var y = e.clientY; // 初始的纵坐标
			$(document).mousemove(function(ev) {
				var _x = ev.clientX; // 拖拽后的横坐标
				var _y = ev.clientY; // 拖拽后的纵坐标
				l = _left + _x - x;
				t = _top + _y - y;
				if (l < 0) l = 0;
				if (t < 0) t = 0;
				if (l > _l) l = _l - 10;
				if (t > _t) t = _t - 10;
				$win.css({left:l,top:t}); // 设置偏移值
				setTitle();
			}).mouseup(function() {
				$(this).unbind("mousemove"); // 解除绑定鼠标移动
			});
		});
		// 关闭窗口
		$win.find(".close").click(function(){
			$win.hide();
		});
		// 放大缩小窗口
		$win.find(".drag").mousedown(function(e) {
			init();
			var x = e.clientX; // 初始的横坐标
			var y = e.clientY; // 初始的纵坐标
			$(document).mousemove(function(ev) {
				var _x = ev.clientX; // 拖拽后的横坐标
				var _y = ev.clientY; // 拖拽后的纵坐标
				w = _width + _x - x;
				h = _height + _y - y;
				if (w < 360) w = 360;
				if (h < 360) h = 360;
				if (w > _w) w = _w - 10;
				if (h > _h) h = _h - 10;
				$win.width(w).height(h); // 设置宽高度
				setTitle();
			}).mouseup(function() {
				$(this).unbind("mousemove"); // 解除绑定鼠标移动
			});
		});
	}
})(jQuery);