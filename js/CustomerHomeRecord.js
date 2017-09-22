// JavaScript Document


var recordShow = false;

$(function(){ /*江南理想*/

    document.ontouchmove = function(e){ e.preventDefault(); }; //文档禁止 touchmove事件
	
	$("#CustomerHomePageBtnId").click(function(){
		
		var	url = "CustomerHomePage.html?";//此处拼接内容
          window.location.href = url;
	});
	
	
	
	$("#recordContentId1").hide();
	
	$("#recordId1").click(function(){
		
		if(recordShow){
			$("#recordContentId1").hide();
		}else{
			$("#recordContentId1").show();
		}
		
		recordShow = !recordShow;
	});
	
	$(".commentImageClass").click(function(){
		pb.open();
	})
	
	
	
	var pb = $.photoBrowser({
	  items: [
		"../images/index_bg@3x.jpg_unsliced.png",
		"../images/index_bg@3x.jpg_unsliced.png",
		"../images/index_bg@3x.jpg_unsliced.png"
	  ]
	});
	
	
});