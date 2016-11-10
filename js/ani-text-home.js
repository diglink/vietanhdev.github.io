---
layout: null
---
{% include /js/typed.js %}
$(function(){
	$(".page-heading").typed({
		strings: ["I'm a student.", "I'm a blogger.", "I'm a developer.", "Hi! I'm Viet Anh."],
		typeSpeed: 30,
		callback: function(){
		shift();
		}
	});
});