// JavaScript Document

$(function(){ /*江南理想*/

    document.ontouchmove = function(e){ e.preventDefault(); }; //文档禁止 touchmove事件
	
	//入住审核
	$("#HotelCheckId1").click(function(){
		
		var	url = "checkInAudit.html?";//此处拼接内容
          window.location.href = url;
	});
	
	
});