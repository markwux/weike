// JavaScript Document


$(function(){ /*江南理想*/

    document.ontouchmove = function(e){ e.preventDefault(); }; //文档禁止 touchmove事件
	
	scroller_fun();
			
});

function  scroller_fun(){
	
	//自动滚动
				$("#image_container").swiper({
					loop: true,
					autoplay: 5000
				});
}