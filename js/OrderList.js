// JavaScript Document
$(function(){ /*江南理想*/

    document.ontouchmove = function(e){ e.preventDefault(); }; //文档禁止 touchmove事件
	
	
	
	//订单详情
	$("#orderlistCellId1").click(function(){
		
		var	url = "OrderDetail.html?";//此处拼接内容
          window.location.href = url;
	});
	
	$("#orderlistCellId2").click(function(){
		
		var	url = "OrderDetail.html?";//此处拼接内容
          window.location.href = url;
	});
	$("#orderlistCellId3").click(function(){
		
		var	url = "OrderDetail.html?";//此处拼接内容
          window.location.href = url;
	});
	
	$("#orderlistCellId4").click(function(){
		
		var	url = "OrderDetail.html?";//此处拼接内容
          window.location.href = url;
	});
	
	
	//入住审核
	$("#handCheckinId1").click(function(){
		
		var	url = "checkInAudit.html?";//此处拼接内容
          window.location.href = url;
	});
	//点评
	$("#OrderListReview1").click(function(){
		
		var	url = "reviewDetail.html?";//此处拼接内容
          window.location.href = url;
	});
	
	//查看点评
	$("#OrderListReview2").click(function(){
		
		var	url = "reviewDetail.html?";//此处拼接内容
          window.location.href = url;
	});
	
	//操作押金
	$("#depositId1").click(function(){
		
		var	url = "OperationDeposit.html?";//此处拼接内容
          window.location.href = url;
	});
	
	//操作押金
	$(".CustomerHomePageBtn").click(function(){
		
		var	url = "CustomerHomePage.html?";//此处拼接内容
          window.location.href = url;
	});
	
	
			
});