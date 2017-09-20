// JavaScript Document

$(function(){ /*江南理想*/

    document.ontouchmove = function(e){ e.preventDefault(); }; //文档禁止 touchmove事件
	
	
	 /* var mapUrl = "OrderList.html";
	  
       $("#imageCell1Id").attr("href",mapUrl);
	*/
	
	  
	
	$("#checkInViewId").click(function(){
		
		var	url = "HandlingChechIn.html?";//此处拼接内容
          window.location.href = url;
	});
	
			
});