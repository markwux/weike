// JavaScript Document

$(function(){ 

    document.ontouchmove = function(e){ e.preventDefault(); }; //文档禁止 touchmove事件
	
	
	
	  
	
	$("#checkInViewId").click(function(){
		
		var	url = "HandlingChechIn.html?";//此处拼接内容
          window.location.href = url;
	});
	
	//$("#everyDayRoomChargeId").click(function(){
		
		
	//});
	
	
	
			
});