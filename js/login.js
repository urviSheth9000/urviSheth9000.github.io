$(document).ready(function(){
	var logInBtn = document.getElementById("logInBtn");

	function createCookie(name,value,days) {
	    if (days) {
	        var date = new Date();
	        date.setTime(date.getTime()+(days*24*60*60*1000));
	        var expires = "; expires="+date.toGMTString();
	    }
		else var expires = "";
		    document.cookie = name+"="+value+expires+"; path=/";
	}

	function readCookie(name) {
	    var nameEQ = name + "=";
	    var ca = document.cookie.split(';');
	    for(var i=0;i < ca.length;i++) {
	        var c = ca[i];
	        while (c.charAt(0)==' ') c = c.substring(1,c.length);
	        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	    }
	    return null;
	}

	function eraseCookie(name) {
	    createCookie(name,"",-1);
	}

	logInBtn.onclick = function(){
		// var jsonContent = {
		// 	"username" : $('[name=email]').val(),
		// 	"password" : $('[name=password]').val(),
		// 	"grant_type" : "password"
		// };

		var formData = new FormData();            
		formData.append("username", $('[name=email]').val());
		formData.append("password", $('[name=password]').val());
		formData.append("grant_type", "password");

		$.ajax({
			url: "http://api.encircle.io/oauth/token",
			data: formData,
			type: "POST",
			crossDomain: true,
			processData: false,
			beforeSend: function(xhr){
				xhr.setRequestHeader("Content-Type",undefined);
				xhr.setRequestHeader("Authorization","Basic d2ViX2FkbWluX2NvbnNvbGU6d2ViX2FkbWluX2NvbnNvbGVfc2VjcmV0=");
			},
			success: function(data){
				createCookie('token',data.access_token,1);
				window.location = "http://appcircle.encircle.io/#/dashboard";
			},
			error: function(jqXHR,exception){
				if(jqXHR.status==200){
					alert("200");
				}
				else if(jqXHR.status==0){
					alert("0");
				}else if(jqXHR.status==500){
					alert("500");
				}else{
					alert("error");
				}
			}
		});
	}
});