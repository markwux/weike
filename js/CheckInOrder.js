// JavaScript Document




$(function(){ /*江南理想*/

    document.ontouchmove = function(e){ e.preventDefault(); }; //文档禁止 touchmove事件
	
	
	  
	//cell点击
	$("#CheckInOrderId1").click(function(){
		
		var	url = "HandlingChechIn.html?";//此处拼接内容
          window.location.href = url;
	});
	
	$("#CheckInOrderId2").click(function(){
		
		var	url = "HandlingChechIn.html?";//此处拼接内容
          window.location.href = url;
	});
		
		//全部
		$("#CheckInOrderAllBtnId").click(function(){
		
		 var	url = "CheckInOrderAll.html?";//此处拼接内容
          window.location.href = url;
	});
		
});