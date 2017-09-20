// JavaScript Document
$(function(){ /*江南理想*/

    document.ontouchmove = function(e){ e.preventDefault(); }; //文档禁止 touchmove事件
	
	
	
	$("#HotelCheckListBtnId").click(function(){
		
		var	url = "HotelCheckAll.html?";//此处拼接内容
          window.location.href = url;
	});
	
	//审核
	$("#HotelCheckCellId1").click(function(){
		
		var	url = "checkInAudit.html?";//此处拼接内容
          window.location.href = url;
	});
			
});