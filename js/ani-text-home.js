---
layout: null
---
{% include /js/typed.min.js %}
$(document).ready(function(){
	var w = window.innerWidth;
	function helloWorld(){
		// Set CSS for .page-heading
		$(".page-heading").css({"margin":"0", "padding-top":"15px", "padding-bottom":"15px"})
		$(".page-heading").html("<div class='text-editor-wrap'><div class='title-bar'><span class='title'>Terminal</span</div><div class='text-body'>$ <span id='typed'></div></div>");
		$("#typed").typed({
			strings: ["Hi!", "I'm a student.", "I'm a blogger.", "I'm a developer.", "I'm Viet Anh.<br>$ Nice to meet you!"],
			typeSpeed: 45,
			callback: function(){
		    	setTimeout(function(){
			        helloWorld();
			    }, 3000);
		    }
		});
	}
	if (w > 700) {
		helloWorld();
	}
});