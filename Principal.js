$(function(){
	$(window).scroll(function(){
		var winTop=$(window).scrollTop();
		if (winTop >= 30) {
			$("body").addClass("sticky-header");
			$("aside").addClass("sticky-header");
		}else{
			$("body").removeClass("sticky-header");
			$("aside").removeClass("sticky-header");
		}
	})
})

var j=0;
		var i=document.getElementById("panal").childNodes;
		function expand(){
			if (j==0) {
				document.getElementById("add").style.transform='rotate(45deg)';
				document.getElementById("panal").style.transform='scale(0.9)';
				i[1].style.transform='translateY(-160px)';
				i[3].style.transform='translate(140px,-80px)';
				i[5].style.transform='translate(140px,80px)';
				i[7].style.transform='translateY(160px)';
				i[9].style.transform='translate(-140px,80px)';
				i[11].style.transform='translate(-140px,-80px)';
				j=1;
			}
			else{
				document.getElementById("add").style.transform = 'rotate(0deg)';
				document.getElementById("panal").style.transform='scale(0.9)';
				i[1].style.transform='translateY(0px)';
				i[3].style.transform='translate(0px)';
				i[5].style.transform='translate(0px)';
				i[7].style.transform='translateY(0px)';
				i[9].style.transform='translate(0px)';
				i[11].style.transform='translate(0px)';
				j=0;
			}
		}