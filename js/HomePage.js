// JavaScript Document

$(function(){ /*江南理想*/

    document.ontouchmove = function(e){ e.preventDefault(); }; //文档禁止 touchmove事件
	
	
	 /* var mapUrl = "OrderList.html";
	  
       $("#imageCell1Id").attr("href",mapUrl);
	*/
	
	  
	
	$("#imageCell1Id").click(function(){
		
		var	url = "OrderList.html?";//此处拼接内容
          window.location.href = url;
	});
	$("#imageCell2Id").click(function(){
		
		var	url = "house_statues.html?";//此处拼接内容
          window.location.href = url;
	});
	$("#imageCell3Id").click(function(){
		
		var	url = "house_price.html?";//此处拼接内容
          window.location.href = url;
	});
	$("#imageCell4Id").click(function(){
		
		var	url = "house_list.html?";//此处拼接内容
          window.location.href = url;
	});
	
	$("#imageCell5Id").click(function(){
		
		var	url = "CheckInOrder.html?";//此处拼接内容
          window.location.href = url;
	});
	
	$("#imageCell6Id").click(function(){
		
		var	url = "reviewCommentsList.html?";//此处拼接内容
          window.location.href = url;
	});
	$("#imageCell7Id").click(function(){
		
		var	url = "house_statues_today.html?";//此处拼接内容
          window.location.href = url;
	});
	
	//管理
	$("#bottomCell1Id").click(function(){
		
		var	url = "GuestsManagement.html?";//此处拼接内容
          window.location.href = url;
	});
	//报表统计
	$("#bottomCell2Id").click(function(){
		
		var	url = "ReportStatisticsList.html?";//此处拼接内容
          window.location.href = url;
	});
	//账本
	$("#bottomCell3Id").click(function(){
		
		var	url = "MyAccountBook.html?";//此处拼接内容
          window.location.href = url;
	});
	
	$("#bottomCell4Id").click(function(){
		
		var	url = "HotelCheckAll.html?";//此处拼接内容
          window.location.href = url;
	});
	//个人信息
	$("#personalInformationBtnId").click(function(){
		
		var	url = "personalInformation.html?";//此处拼接内容
          window.location.href = url;
	});
	
	//报表统计
	$(".toResportClass").click(function(){
		
		var	url = "ReportStatisticsList.html?";//此处拼接内容
          window.location.href = url;
	});
	//报表统计
	$(".toResportClass").click(function(){
		
		var	url = "ReportStatisticsList.html?";//此处拼接内容
          window.location.href = url;
	});
	//房态
	$(".toResportClass").click(function(){
		
		var	url = "ReportStatisticsList.html?";//此处拼接内容
          window.location.href = url;
	});
	//报表统计
	$(".toResportClass").click(function(){
		
		var	url = "ReportStatisticsList.html?";//此处拼接内容
          window.location.href = url;
	});
	
			
});


function pagePush_fun(){
	
	 
}