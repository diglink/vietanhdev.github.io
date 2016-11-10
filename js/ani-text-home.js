---
layout: null
---
{% include /js/typed.js %}
$(document).ready(function(){
	$(".page-heading").html("<div class='text-editor-wrap'><div class='title-bar'><span class='title'>Terminal</span</div><div class='text-body'>$ <span id='typed'></div></div>");
	$("#typed").typed({
		strings: ["Hi!", "I'm a student", "I'm a blogger", "I'm a developer", "I'm Viet Anh.<br>$ Nice to meet you!"],
		typeSpeed: 45
	});
	
});