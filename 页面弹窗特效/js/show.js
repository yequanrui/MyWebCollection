	function showid(idname){
		var isIE = (document.all) ? true : false;
		var isIE6 = isIE && ([/MSIE (\d)\.0/i.exec(navigator.userAgent)][0][1] == 6);
		var newbox = document.getElementById(idname);
		newbox.style.zIndex = "9999999";
		newbox.style.display = "block"
		newbox.style.position = !isIE6 ? "fixed" : "absolute";
		newbox.style.top = newbox.style.left = "50%";
		newbox.style.marginTop = -newbox.offsetHeight / 2 + "px";
		newbox.style.marginLeft = -newbox.offsetWidth / 2 + "px";
		var layer = document.createElement("div");
		layer.id = "layer";
		layer.style.width = layer.style.height = "100%";
		layer.style.position = !isIE6 ? "fixed" : "absolute";
		layer.style.top = layer.style.left = 0;
		layer.style.backgroundColor = "#888";
		layer.style.zIndex = "9999998";
		layer.style.opacity = "0.6";
		document.body.appendChild(layer);
		function layer_iestyle(){
			layer.style.width = Math.max(document.documentElement.scrollWidth, document.documentElement.clientWidth) +
			"px";
			layer.style.height = Math.max(document.documentElement.scrollHeight, document.documentElement.clientHeight) +
			"px";
		}
		function newbox_iestyle(){
			newbox.style.marginTop = document.documentElement.scrollTop - newbox.offsetHeight / 2 + "px";
			newbox.style.marginLeft = document.documentElement.scrollLeft - newbox.offsetWidth / 2 + "px";
		}
		if (isIE) {
			layer.style.filter = "alpha(opacity=60)";
		}
		if (isIE6) {
			layer_iestyle()
			newbox_iestyle();
			window.attachEvent("onscroll", function(){
				newbox_iestyle();
			})
			window.attachEvent("onresize", layer_iestyle)
		}
	}