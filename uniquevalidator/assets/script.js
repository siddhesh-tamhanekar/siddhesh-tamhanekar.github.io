
$(function(){
	

	var deviceWidth = $(window).width();
	if(deviceWidth <=600)
		$('body').addClass("mobile");

	if($('body').hasClass("mobile")) {
		console.log("mobile view detected");
		
		if($(".links").length )
		{
			console.log("we are on one of documentation pages");
			$(".links").before("<a href='#' class='show toc' ><span>+</span>Table of Contents</a>");
			$(".links").hide();
			$(".toc").css("padding-left","18px");
		}

		$(".logo").before('<a class="navtoggle" href="#">Menu</a>');


	}
	$(document).on("click",".navtoggle",function(e){
		e.preventDefault();
		$("nav").slideToggle('slow');

	});
	$(document).on("click",".toc",function(e){
		e.preventDefault();
		$(".links").slideToggle("slow");
		$(".toc span").text($(".toc span").text() == '+' ? '-' : '+');
	});
});