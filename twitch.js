$(document).ready(function(){
	var twitchUsers=["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"," brunofin","comster404"];
	
	$.ajax({
		type:'GET',
		url:'https://api.twitch.tv/kraken/streams/'+twitchUsers[0]+'?callback=?',
		dataType:'JSON',
		success:function(data){
			console.log(data.stream);
			//this works
		}
	});
});




//****THIS BELOW DOES NOT WORK, MAKE IT WORK LIKE ABOVE!

$(document).ready(function(){
	var twitchUsers=["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"," brunofin","comster404"];
	function addingStreamer(streamer){
		$.ajax({
			type:'GET',
			url:'https://api.twitch.tv/kraken/streams/'+streamer+'?callback=?',
			dataType:'JSON',
			success:function(data){
				var status,game,logo,;
				if(data.stream===null){
					status="Offline";
					game="The streamer is offline"
				}
				else{
					status="Online"
					game=data.stream.game;
					logo=data.stream.channel.logo;
				}
				if(data.stream===undefined){
					logo="https://d30y9cdsu7xlg0.cloudfront.net/png/116547-200.png";
					status="Offline"
					game="The streamer does not exist"
					$(".streamer-container").append("<div class='streamer'><img src='"+logo+"'>"+streamer+"<br>"+game+""+status+"</div>");
				}
				else{
					$(".streamer-container").append("<div class='streamer'><img src='"+logo+"'>"+streamer+"<br>"+game+""+status+"</div>");
				}
				//$(".streamer-container").append("<div class='streamer'><img src='"+data.stream.channel.logo+"'>"+streamer+"<br>"+game+""+status+"</div>");
			}
		});
	}
	for(i=0;i<twitchUsers.length;i++){
		addingStreamer(twitchUsers[i]);
	}
});