---
layout: null
---
{% include /js/typed.js %}
$(document).ready(function(){
	$(".page-heading").html("<div class='text-editor-wrap'><div class='title-bar'><span class='title'>Terminal</span</div><div class='text-body'>$ <span id='typed1'></div></div>");
	$("#typed1").typed({
		strings: ["sTARTing.", "sTARTing...", "sTARTing....."],
		typeSpeed: 20,
		callback: function(){
        	line2();
      	}
	});
	function line2(){
		$(".typed-cursor").remove();
		$("#typed1").append("<br>$ <span id='typed2'></span>");
		$("#typed2").typed({
			strings: ["Hi!"],
			typeSpeed: 45,
			callback: function(){
	        	line3();
	      	}
		});
	}
	function line3(){
		$(".typed-cursor").remove();
		$("#typed2").append("<br>$ <span id='typed3'></span>");
		$("#typed3").typed({
			strings: ["I'm a student"],
			typeSpeed: 45,
		 	callback: function(){
		        	line4();
		      	}
		});
	}
	function line4(){
		$(".typed-cursor").remove();
		$("#typed3").append("<br>$ <span id='typed4'></span>");
		$("#typed4").typed({
		strings: ["I'm a blogger"],
		typeSpeed: 45,
		callback: function(){
	        	line5();
	      	}
		});
	}
	function line5(){
		$(".typed-cursor").remove();
		$("#typed4").append("<br>$ <span id='typed5'></span>");
		$("#typed5").typed({
		strings: ["I'm a developer"],
		typeSpeed: 45,
		callback: function(){
	        	line6();
	      	}
		});
	}
	function line6(){
		$(".typed-cursor").remove();
		$("#typed5").append("<br>$ <span id='typed6'></span>");
		$("#typed6").typed({
		strings: ["I'm Viet Anh. Nice to meet you!"],
		typeSpeed: 45
		});
	}
});