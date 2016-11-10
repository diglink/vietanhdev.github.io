---
layout: null
---
{% include /js/typed.js %}
$(document).ready(function(){
	$(".page-heading").html("<div class='text-editor-wrap'><div class='title-bar'><span class='title'>Terminal</span</div><div class='text-body'>$ downloading<span id='typed1'></div></div>");
	$("#typed1").typed({
		strings: [".", "..", "..."],
		typeSpeed: 20,
		callback: function(){
        	setTimeout(line2(), 2000);
      	}
	});
	function line2(){
		$(".typed-cursor").remove();
		$("#typed1").append("<br>$ <span id='typed2'></span>");
		$("#typed2").typed({
			strings: ["Hi!"],
			typeSpeed: 60,
			callback: function(){
	        	setTimeout(line3(), 1000);
	      	}
		});
	}
	function line3(){
		$(".typed-cursor").remove();
		$("#typed2").append("<br>$ <span id='typed3'></span>");
		$("#typed3").typed({
			strings: ["I'm a student"],
			typeSpeed: 60,
		 	callback: function(){
		        	setTimeout(line4(), 1000);
		      	}
		});
	}
	function line4(){
		$(".typed-cursor").remove();
		$("#typed3").append("<br>$ <span id='typed4'></span>");
		$("#typed4").typed({
		strings: ["I'm a blogger"],
		typeSpeed: 60,
		callback: function(){
	        	setTimeout(line5(), 1000);
	      	}
		});
	}
	function line5(){
		$(".typed-cursor").remove();
		$("#typed4").append("<br>$ <span id='typed5'></span>");
		$("#typed5").typed({
		strings: ["I'm a developer"],
		typeSpeed: 60,
		callback: function(){
	        	setTimeout(line6(), 1000);
	      	}
		});
	}
	function line6(){
		$(".typed-cursor").remove();
		$("#typed5").append("<br>$ <span id='typed6'></span>");
		$("#typed6").typed({
		strings: ["I'm Viet Anh. Nice to meet you!"],
		typeSpeed: 60
		});
	}
});