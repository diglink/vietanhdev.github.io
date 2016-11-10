---
layout: null
---
{% include /js/typed.js %}
$(document).ready(function(){
	$(".page-heading").html("<div class='text-editor-wrap'><div class='title-bar'><span class='title'>Terminal</span</div><div class='text-body'>$ <span id='typed'></span></div></div>");
	$("#typed").typed({
		strings: ["I'm a student.", "I'm a blogger.", "I'm a developer.", "Hi! I'm Viet Anh."],
		typeSpeed: 30,
		callback: function(){
		shift();
		}
	});
	function shift(){
      $(".head-wrap").addClass("shift-text");
      terminalHeight();
  	}
});