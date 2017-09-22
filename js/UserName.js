// JavaScript Document

//var nameTitle;
$(function(){ 


   var nameTitle = $.getUrlVar("nameTitle");
   
    document.ontouchmove = function(e){ e.preventDefault(); }; //文档禁止 touchmove事件
	
	if(nameTitle == "0"){
		document.getElementById("titleLabelId").innerHTML = "用户名";
		document.getElementById("contentLabelId").setAttribute("placeholder","请输入用户名");
		
	}
	if(nameTitle == "1"){
		document.getElementById("titleLabelId").innerHTML = "真实姓名";
		document.getElementById("contentLabelId").setAttribute("placeholder","请输入真实姓名");
	}
	
	if(nameTitle == "3"){
		document.getElementById("titleLabelId").innerHTML = "邮箱";
		document.getElementById("contentLabelId").setAttribute("placeholder","请输入邮箱");
	}
		  
});

//页面之间传值需要的函数
 $.extend({
				  getUrlVars: function() {
					var vars = [],
					  hash;
					var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
					for (var i = 0; i < hashes.length; i++) {
					  hash = hashes[i].split('=');
					  vars.push(hash[0]);
					  vars[hash[0]] = hash[1];
					}
					return vars;
				  },
				  getUrlVar: function(name) {
					return $.getUrlVars()[name];
				  }
 });
