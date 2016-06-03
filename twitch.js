
$(document).ready(function(){
	var twitchUsers=["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas","brunofin","comster404"];

	function offlineTest(streamer){
		$.ajax({
			type:'GET',
			url:'https://api.twitch.tv/kraken/streams/'+streamer+'?callback=?',
			dataType:'JSON',
			success:function(data){
				if(data.stream===null){
					//offline users
					//console.log(data);

					$.ajax({
						type:'GET',
						url:'https://api.twitch.tv/kraken/channels/'+streamer+'?callback=?',
						dataType:'JSON',
						success:function(data){
							var logo=data.logo;
							var status="Offline";
							$(".streamer-container").append("<div class='streamer'><img class='img-thumbnail img-rounded img-responsive' src='"+logo+"'>"+streamer+status+"</div>");
							//needs fixing cuz right now the image is too big, try adding bootstrap cols, that might make the images small due to col-md-1 and img-responsive
							//create 3 divs, one for offline, one for online, one for deleted user, put those divs inside streamer-container and append your html to those divs
							//instead of appending them to steamer-container 
						}
					});
				}
				else if(data.status===422){
					//fake users
					//console.log(data);
					var logo="https://d30y9cdsu7xlg0.cloudfront.net/png/116547-200.png";
					var status="This user does not exist";
					$(".streamer-container").append("<div class='streamer'><img class='img-rounded img-responsive' src='"+logo+"'>"+streamer+status+"</div>");
					//works, just needs fixing like the offline user HTML/CSS does
				}
				else{
					//online users
					//console.log(data);
					$.ajax({
						type:'GET',
						url:'https://api.twitch.tv/kraken/channels/'+streamer+'?callback=?',
						dataType:'JSON',
						success:function(data){
							var logo=data.logo;
							var status="Online";
							var game=data.game;
							$(".streamer-container").append("<div class='streamer'><img class='img-rounded img-responsive' src='"+logo+"'>"+streamer+status+game+"</div>");
						}
					});
				}
			}
		});
	}
	//offlineTest("brunofin");
	//offlineTest("freecodecamp");
	for(i=0;i<twitchUsers.length;i++){
		offlineTest(twitchUsers[i]);
	}

});




