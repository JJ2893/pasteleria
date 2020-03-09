$(function(){
	$(window).scroll(function(){
		var winTop=$(window).scrollTop();
		if (winTop >= 30) {
			$("body").addClass("sticky-header");
		}else{
			$("body").removeClass("sticky-header");
		}
	})
})


		var j=0;
		var i=document.getElementById("submenu").childNodes;
		function expand(){
			if (j==0) {
				document.getElementById("share").style.transform='rotate(180deg)';
				document.getElementById("submenu").style.transform='scale(0.9)';
				i[1].style.transform='translateY(-80px)';
				i[3].style.transform='translate(70px,-40px)';
				i[5].style.transform='translate(70px,40px)';
				i[7].style.transform='translateY(80px)';
				j=1;
			}
			else{
				document.getElementById("share").style.transform = 'rotate(0deg)';
				document.getElementById("submenu").style.transform='scale(0.9)';
				i[1].style.transform='translateY(0px)';
				i[3].style.transform='translate(0px)';
				i[5].style.transform='translate(0px)';
				i[7].style.transform='translateY(0px)';
				j=0;
			}
		}
