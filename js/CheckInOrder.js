// JavaScript Document


var touchDateAftertodayBefore = 0;

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
	
	var date = new Date();
	document.getElementById("todayDateId").innerHTML = date.getMonth()+"年"+ date.getDate()+"日 今日"; 
	
	//前一天
	$("#todayBefore").click(function(){
		touchDateAftertodayBefore -=1;
		document.getElementById("todayDateId").innerHTML = GetDateStr(touchDateAftertodayBefore); 
	}); 
	//后一天
	$("#todayAfter").click(function(){
		touchDateAftertodayBefore +=1;
		document.getElementById("todayDateId").innerHTML = GetDateStr(touchDateAftertodayBefore); 
	}); 
		
});

function GetDateStr(AddDayCount) {
	var dd = new Date();
	dd.setDate(dd.getDate()+AddDayCount);//获取AddDayCount天后的日期
	var y = dd.getFullYear();
	var m = dd.getMonth()+1;//获取当前月份的日期
	var d = dd.getDate();
	return m+"月"+d +"日";
} 


