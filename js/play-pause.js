$(document).ready(function(){
	var videoToPlay = document.getElementById("videoToPlay"),
		videoPlayBtn = document.getElementById("videoPlayBtn");

	var flag = 1;


	var fadeOutVideoElem = function(){
		$(videoToPlay).fadeOut("fast","linear",function(){
			startLoader();
		});
		$(videoPlayBtn).fadeOut("fast");
	}

	var fadeInVideoElem = function(){
		$(videoToPlay).fadeIn("fast","linear",function(){
			$(cssLoader).fadeOut("fast");
		});
	}

	var startLoader = function(){
		$(cssLoader).fadeIn("fast");
	}

	var stopLoader = function(){
		$(cssLoader).fadeOut("fast","linear",function(){
			fadeInVideoElem();
		});
	}

	videoToPlay.onloadstart = function(){
		fadeOutVideoElem();
	}

	videoToPlay.onloadeddata = function(){
		stopLoader();
	}

	videoPlayBtn.parentElement.onclick = function(){
		if($(videoPlayBtn).hasClass("ion-play")){
			$(videoPlayBtn).removeClass("ion-play").addClass("ion-pause");
			videoToPlay.play();
			videoToPlay.muted = true;
		} else {
			$(videoPlayBtn).removeClass("ion-pause").addClass("ion-play");
			videoToPlay.pause();
			videoToPlay.muted = true;
		}
	};
	$(videoToPlay).bind("ended", function() {
	   $(videoPlayBtn).removeClass("ion-pause").addClass("ion-play");
	});
});