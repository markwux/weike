// JavaScript Document

$(function(){ /*江南理想*/

    document.ontouchmove = function(e){ e.preventDefault(); }; //文档禁止 touchmove事件
	
	
	 /* var mapUrl = "OrderList.html";
	  
       $("#imageCell1Id").attr("href",mapUrl);
	*/
	
	  
	
	$("#addAccountsId").click(function(){
		
		var	url = "AccountsShowAndEdit.html?";//此处拼接内容
          window.location.href = url;
	});
	
	$("#showAccountsId").click(function(){
		
		var	url = "AccountsShowAndEdit.html?";//此处拼接内容
          window.location.href = url;
	})
	$("#OneRoomOrderCellId").click(function(){
		
		var	url = "OneRoomOrder.html?";//此处拼接内容
          window.location.href = url;
	})
	
	$("#commentsSuspensImageId1").click(function(){
		  document.getElementById("commentsSuspensImageId1").src="../images/xingxing.png";
		  document.getElementById("commentsSuspensImageId2").src="../images/xingxing1.png";
		  document.getElementById("commentsSuspensImageId3").src="../images/xingxing1.png";
		  document.getElementById("commentsSuspensImageId4").src="../images/xingxing1.png";
		  document.getElementById("commentsSuspensImageId5").src="../images/xingxing1.png";
		   document.getElementById("gradeLabelId").innerHTML = unescape("1分");
		   
	})
    $("#commentsSuspensImageId2").click(function(){
		 document.getElementById("commentsSuspensImageId1").src="../images/xingxing.png";
		  document.getElementById("commentsSuspensImageId2").src="../images/xingxing.png";
		 document.getElementById("commentsSuspensImageId3").src="../images/xingxing1.png";
		  document.getElementById("commentsSuspensImageId4").src="../images/xingxing1.png";
		   document.getElementById("commentsSuspensImageId5").src="../images/xingxing1.png";
		   document.getElementById("gradeLabelId").innerHTML = unescape("2分");
	})
	$("#commentsSuspensImageId3").click(function(){
		 document.getElementById("commentsSuspensImageId1").src="../images/xingxing.png";
		  document.getElementById("commentsSuspensImageId2").src="../images/xingxing.png";
		 document.getElementById("commentsSuspensImageId3").src="../images/xingxing.png";
		  document.getElementById("commentsSuspensImageId4").src="../images/xingxing1.png";
		   document.getElementById("commentsSuspensImageId5").src="../images/xingxing1.png";
		    document.getElementById("gradeLabelId").innerHTML = unescape("3分");
	})
	$("#commentsSuspensImageId4").click(function(){
		 document.getElementById("commentsSuspensImageId1").src="../images/xingxing.png";
		  document.getElementById("commentsSuspensImageId2").src="../images/xingxing.png";
		 document.getElementById("commentsSuspensImageId3").src="../images/xingxing.png";
		  document.getElementById("commentsSuspensImageId4").src="../images/xingxing.png";
		   document.getElementById("commentsSuspensImageId5").src="../images/xingxing1.png";
		    document.getElementById("gradeLabelId").innerHTML = unescape("4分");
	})
	$("#commentsSuspensImageId5").click(function(){
		 document.getElementById("commentsSuspensImageId1").src="../images/xingxing.png";
		  document.getElementById("commentsSuspensImageId2").src="../images/xingxing.png";
		 document.getElementById("commentsSuspensImageId3").src="../images/xingxing.png";
		  document.getElementById("commentsSuspensImageId4").src="../images/xingxing.png";
		   document.getElementById("commentsSuspensImageId5").src="../images/xingxing.png";
		    document.getElementById("gradeLabelId").innerHTML = unescape("5分");
	})
  
			
});


function onClick(){
     
    var a=document.getElementById("ULId");
    var target = event.target;
    var count=parseInt(target.getAttribute("index"));
    for(var i=0;i<a.childElementCount;i++){
        a.children[i].src=="../images/xingxing1.png";
        for(var o=0;o<count;o++){
            a.children[o].src=="../images/xingxing.png";
        }              
    }
  }