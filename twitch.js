
$(document).ready(function(){
	var twitchUsers=["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas","brunofin","comster404"];

	function allStatus(streamer){
		$.ajax({
			type:'GET',
			url:'https://api.twitch.tv/kraken/streams/'+streamer+'?callback=?',
			dataType:'JSON',
			success:function(data){
				if(data.stream===null){
					$.ajax({
						type:'GET',
						url:'https://api.twitch.tv/kraken/channels/'+streamer+'?callback=?',
						dataType:'JSON',
						success:function(data){
							$(".offline").append("<div class='row'><div class='col-md-1'><img class='img-responsive img-rounded' src='"+data.logo+"'></div><div class='col-md-2'><a class='link' target='_blank' href='"+data.url+"'>"+streamer+"</a></div><div class='col-md-6'>The user is offline</div><div class='col-md-3 offline-text'>Offline</div></div>");
						}
					});
				}
				else if(data.status===422){
					var logo="https://d30y9cdsu7xlg0.cloudfront.net/png/116547-200.png";
					$(".deleted").append("<div class='row'><div class='col-md-1'><img class='img-responsive img-rounded' src='"+logo+"'></div><div class='col-md-2'><a class='link deleted-link' target='_blank' href=''>"+streamer+"</a></div><div class='col-md-6'>The user does not exist</div><div class='col-md-3 offline-text'>Deleted</div></div>");
				}
				else{
					$.ajax({
						type:'GET',
						url:'https://api.twitch.tv/kraken/channels/'+streamer+'?callback=?',
						dataType:'JSON',
						success:function(data){
							$(".online").append("<div class='row'><div class='col-md-1'><img class='img-responsive img-rounded' src='"+data.logo+"'></div><div class='col-md-2'><a class='link' target='_blank' href='"+data.url+"'>"+streamer+"</a></div><div class='col-md-6 game-text'>"+data.game+"</div><div class='col-md-3 online-text'>Online</div></div>");
						}
					});
				}
			}
		});
	}

	function offlineStatus(streamer){
		$.ajax({
			type:'GET',
			url:'https://api.twitch.tv/kraken/streams/'+streamer+'?callback=?',
			dataType:'JSON',
			success:function(data){
				if(data.stream===null){
					$.ajax({
						type:'GET',
						url:'https://api.twitch.tv/kraken/channels/'+streamer+'?callback=?',
						dataType:'JSON',
						success:function(data){
							$(".offline").append("<div class='row'><div class='col-md-1'><img class='img-responsive img-rounded' src='"+data.logo+"'></div><div class='col-md-2'><a class='link' target='_blank' href='"+data.url+"'>"+streamer+"</a></div><div class='col-md-6'>The user is offline</div><div class='col-md-3 offline-text'>Offline</div></div>");
						}
					});
				}
				else if(data.status===422){
					var logo="https://d30y9cdsu7xlg0.cloudfront.net/png/116547-200.png";
					$(".deleted").append("<div class='row'><div class='col-md-1'><img class='img-responsive img-rounded' src='"+logo+"'></div><div class='col-md-2'><a class='link deleted-link' target='_blank' href=''>"+streamer+"</a></div><div class='col-md-6'>The user does not exist</div><div class='col-md-3 offline-text'>Deleted</div></div>");
				}
			}
		});
	}

	function onlineStatus(streamer){
		$.ajax({
			type:'GET',
			url:'https://api.twitch.tv/kraken/streams/'+streamer+'?callback=?',
			dataType:'JSON',
			success:function(data){
				if((data.stream!==null)&&(data.status!=422)){
					$.ajax({
						type:'GET',
						url:'https://api.twitch.tv/kraken/channels/'+streamer+'?callback=?',
						dataType:'JSON',
						success:function(data){
							$(".online").append("<div class='row'><div class='col-md-1'><img class='img-responsive img-rounded' src='"+data.logo+"'></div><div class='col-md-2'><a class='link' target='_blank' href='"+data.url+"'>"+streamer+"</a></div><div class='col-md-6 game-text'>"+data.game+"</div><div class='col-md-3 online-text'>Online</div></div>");
						}
					});
				}
			}
		});
	}

	//when page loads this runs:
	for(i=0;i<twitchUsers.length;i++){
		allStatus(twitchUsers[i]);
	}

	$(".all-button").on('click',function(){
		for(i=0;i<twitchUsers.length;i++){
			$(".online").empty();
			$(".offline").empty();
			$(".deleted").empty();
			allStatus(twitchUsers[i]);
		}
	});

	$(".online-button").on('click',function(){
		for(i=0;i<twitchUsers.length;i++){
			$(".online").empty();
			$(".offline").empty();
			$(".deleted").empty();
			onlineStatus(twitchUsers[i]);
		}
	});

	$(".offline-button").on('click',function(){
		for(i=0;i<twitchUsers.length;i++){
			$(".online").empty();
			$(".offline").empty();
			$(".deleted").empty();
			offlineStatus(twitchUsers[i]);
		}
	});

});




