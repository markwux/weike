// JavaScript Document



$(function(){ /*江南理想*/

    document.ontouchmove = function(e){ e.preventDefault(); }; //文档禁止 touchmove事件
	
	
	
	$("#reviewDetailOrderDetailId").click(function(){
		
		var	url = "OrderDetail.html?";//此处拼接内容
          window.location.href = url;
	});
	
	$("#startActionId1").click(function(){
		  document.getElementById("startActionId1").src="../images/contactflag_star_select_24x24_@2x.png";
		  document.getElementById("startActionId2").src="../images/contactflag_star_nor_24x24_@2x.png";
		  document.getElementById("startActionId3").src="../images/contactflag_star_nor_24x24_@2x.png";
		  document.getElementById("startActionId4").src="../images/contactflag_star_nor_24x24_@2x.png";
		  document.getElementById("startActionId5").src="../images/contactflag_star_nor_24x24_@2x.png";
		   document.getElementById("showGradeId").innerHTML = unescape("1分");
		   
	})
    $("#startActionId2").click(function(){
		 document.getElementById("startActionId1").src="../images/contactflag_star_select_24x24_@2x.png";
		  document.getElementById("startActionId2").src="../images/contactflag_star_select_24x24_@2x.png";
		 document.getElementById("startActionId3").src="../images/contactflag_star_nor_24x24_@2x.png";
		  document.getElementById("startActionId4").src="../images/contactflag_star_nor_24x24_@2x.png";
		   document.getElementById("startActionId5").src="../images/contactflag_star_nor_24x24_@2x.png";
		   document.getElementById("showGradeId").innerHTML = unescape("2分");
	})
	$("#startActionId3").click(function(){
		  document.getElementById("startActionId1").src="../images/contactflag_star_select_24x24_@2x.png";
		  document.getElementById("startActionId2").src="../images/contactflag_star_select_24x24_@2x.png";
		  document.getElementById("startActionId3").src="../images/contactflag_star_select_24x24_@2x.png";
		  document.getElementById("startActionId4").src="../images/contactflag_star_nor_24x24_@2x.png";
		  document.getElementById("startActionId5").src="../images/contactflag_star_nor_24x24_@2x.png";
		   document.getElementById("showGradeId").innerHTML = unescape("3分");
	})
	$("#startActionId4").click(function(){
		 document.getElementById("startActionId1").src="../images/contactflag_star_select_24x24_@2x.png";
		 document.getElementById("startActionId2").src="../images/contactflag_star_select_24x24_@2x.png";
		 document.getElementById("startActionId3").src="../images/contactflag_star_select_24x24_@2x.png";
		 document.getElementById("startActionId4").src="../images/contactflag_star_select_24x24_@2x.png";
		 document.getElementById("startActionId5").src="../images/contactflag_star_nor_24x24_@2x.png";
		  document.getElementById("showGradeId").innerHTML = unescape("4分");
	})
	$("#startActionId5").click(function(){
		 document.getElementById("startActionId1").src="../images/contactflag_star_select_24x24_@2x.png";
		 document.getElementById("startActionId2").src="../images/contactflag_star_select_24x24_@2x.png";
		 document.getElementById("startActionId3").src="../images/contactflag_star_select_24x24_@2x.png";
		 document.getElementById("startActionId4").src="../images/contactflag_star_select_24x24_@2x.png";
		 document.getElementById("startActionId5").src="../images/contactflag_star_select_24x24_@2x.png";
		 document.getElementById("showGradeId").innerHTML = unescape("5分");
	})
	$(".houseImage").click(function(){
		pb1.open();
	});
	
	
	var pb1 = $.photoBrowser({
	  items: [
		"../images/index_bg@3x.jpg_unsliced.png",
		"../images/index_bg@3x.jpg_unsliced.png",
		"../images/index_bg@3x.jpg_unsliced.png"
	  ]
	});
		
});

