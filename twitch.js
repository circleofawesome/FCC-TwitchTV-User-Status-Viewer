$(document).ready(function(){
	var twitchUsers=["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"," brunofin","comster404"];
	function addingStreamer(streamer){
		$.ajax({
			type:'GET',
			url:'https://api.twitch.tv/kraken/streams/'+streamer+'?callback=?',
			dataType:'JSON',
			success:function(data){
				var status;
				if(data.stream===null){
					status="Offline";
				}
				else{
					status=data.stream.game;
				}
				$(".streamer-container").append("<div class='streamer'><img src='"+data.stream.channel.logo+"'></div>");
			}
		});
	}
});