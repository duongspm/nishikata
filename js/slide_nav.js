$(function() {
				$('#slide_nav_a li a').hover(
					function(){
						$(this).find('span').stop().animate({'marginRight':'117px'},500);
					},
					function () {
						$(this).find('span').stop().animate({'marginRight':'0px'},300);
					}
				);
			});