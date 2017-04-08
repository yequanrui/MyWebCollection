(function($){
	$.fn.activiTag = function(opts) {
		opts = $.extend({
			move_step:2,	// 元素移动步长--px
			move_speed:40,	// 元素移动速度--ms
			init_speed:1000,// 元素创建速度--ms
			min_opacity:0,	// 元素最低透明度--0-1小数
			max_grain: 10,	// 最大粒度
			// a标签数组
			a_List: ["<a href='#'>请添加元素哦</a>","<a href='#'>Spring Jpa详解</a>","<a href='#'>javamail邮箱</a>"],	// a标签字符串数组
			// 背景颜色数组
			color_List: ['#CD2626','#8b4513','#696969','#ff8c00','#6495ED']	// 标签颜色数组
		},opts||{});
		
		var aTag = $(this); // 当前容器对象
		var T_width = aTag.width(), T_height = aTag.height(); // 容器高度、宽度
		
		return this.each(function(){
			
			function setATagCss() {	// 设置容器相应css
				aTag.css({position:'relative',overflow:'hidden'});
			}
           
            function getRandomNum(Min, Max){ // 获取两个区间之内随机数 
            	Min = new Number(Min);Max = new Number(Max);
                var Range = Max - Min + 1;
                var Rand = Math.random();
                return Min + Math.floor(Rand * Range);
            }
			
			function getRandomXY(num) {	// 随机返回一个 正/负参数
				num = new Number(num);	
				if(Math.random()<=0.5) 
				num = -num;
				return num; 
			}
			
			/**
			 * 随机创建a标签，宽度为容器宽度的三分之一，然后在自身基础上+-五分之一宽度
			 * 高度自身宽度的三分之一，然后+-三分之一
			 */
			function createATag() {
				var i = getRandomNum(0,opts.a_List.length-1);
				var a = $(opts.a_List[i]);	// 每个标签元素
				aTag.append(a);
				return a;
			}
			
			/** 设置a标签css样式 **/
			function setCss(a) {
				var w = Math.ceil(T_width/3) + getRandomXY(T_width/60);
				var h = Math.ceil(w/3) + getRandomXY(w/36); // 行高
				var zIndex = Math.ceil(Math.random()*400);	// 层数
				var rdmOpcy = getRandomNum(new Number(opts.min_opacity),0);
				// 行高、层数、透明度
				a.css({
					opacity:rdmOpcy,
					zIndex: zIndex,
					lineHeight:h+'px',
					position: 'absolute',
					textDecoration:'none',
					textAlign:'center',
					borderRadius: '3px',
					color:'#FFFFFF',
					whiteSpace: 'nowrap',
				});
				return a;
			}
			
			/** 计算标签相对于容器的初始化位置(X_Y 坐标) **/
			function setXY(a) {
				var x = getRandomNum(0,(T_width-a.width()));
				var y = getRandomNum(0,T_height/10);
				a.css({left:x+'px', bottom:y+'px'});
				return a;
			}
			
			/** 设置随机背景颜色 **/
			function setColor(a) {
				var i = Math.ceil(Math.random()*opts.color_List.length -1);
				a.css({backgroundColor:opts.color_List[i]})
			}
			
			/** 构造函数入口 **/
			function construct() {
				var a = createATag();
				setCss(a);	// css
				setColor(a); // color
				setXY(a);	// 坐标位置
				return a;
			}
			
			/** 动画定时器函数 **/
			function interVal(a,s_opcy,botm,n,space,s) {
				var opcy = a.css('opacity');  // 透明度
				var botm_ = a.css('bottom').replace('px',''); // 实时底部距离
				var opcy_ = parseFloat(new Number(a.css('opacity'))) + s_opcy;  // ++透明度
				var _opcy_ = parseFloat(new Number(a.css('opacity'))) - s_opcy; // --透明度
				var fall = botm_ - botm;  // 已移动的距离
				botm_ = new Number(botm_) + new Number(opts.move_step);
                a.css({
                    display: 'block',
                    bottom: botm_,
                });
				
				if(fall < n) 
				{ a.css({opacity: opcy_}) }
				else if(2*n < fall)
				{ a.css({opacity: _opcy_}) }
					
                if (botm_ >= space) 
				{
                    clearInterval(s);
                    a.remove();
                }
			}
			
			function init() {
				if(aTag.children('a').length >= new Number(opts.max_grain))
				return; 
				var a = construct();
				var opcy = a.css('opacity');  // 透明度
				var zInx = a.css('zIndex');	  // 层数
				var botm = a.css('bottom').replace('px',''); // 初始到底部距离
				var space = T_height - a.height() - a.css('bottom').replace('px','');  // 要移动的距离
				
				var n = space/3;	// 变换透明度距离
				var step = 1-opcy;	// 要变化透明度值
				var sec = n/opts.move_step*opts.move_speed/1000; // 距离/单步长 * 单步长秒数 = 需要秒数
				var s_opcy = opts.move_speed/1000/sec * step;  // 每次循环需要变换的透明度值
				var speed_ = getRandomNum(new Number(opts.move_speed)-30,new Number(opts.move_speed)+30);
				var currOpcy;	// 记录鼠标移入时透明度
//				console.log(opts.move_speed+'....'+speed_)
				/** 元素移动循环 **/
                var s = setInterval(function(){
					interVal(a,s_opcy,botm,n,space,s);
				}, speed_)
				
                a.mouseover(function(){	// 鼠标移入
                	currOpcy = a.css('opacity');
                    clearInterval(s);
                    $(this).css({
                        zIndex: 401,
                        opacity: 1
                    });
                });
				
                a.mouseout(function(){ // 鼠标移出
                    $(this).css({
                        zIndex: zInx,
                        opacity: currOpcy
                    });
					s= setInterval(function(){
						interVal(a,s_opcy,botm,n,space,s);
					},speed_);
                });
			}
			setATagCss();
			setInterval(init,opts.init_speed);
		});
	}
})(jQuery) 