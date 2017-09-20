// JavaScript Document

$(function(){ /*江南理想*/

    document.ontouchmove = function(e){ e.preventDefault(); }; //文档禁止 touchmove事件
	
	
	
	//订单详情
	$("#revenueExpenditureCellId1").click(function(){
		
		var	url = "AccountsShowAndEdit.html?";//此处拼接内容
          window.location.href = url;
	});
	
	$("#revenueExpenditureCellId2").click(function(){
		
		var	url = "AccountsShowAndEdit.html?";//此处拼接内容
          window.location.href = url;
	});
	
	//收支概览  
		$("#AccountOverviewBtnId").click(function(){
		
		var	url = "AccountOverview.html?";//此处拼接内容
          window.location.href = url;
	});	
});