
$(document).ready(function(){
	var twitchUsers=["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"," brunofin","comster404"];

	function offlineTest(streamer){
		$.ajax({
			type:'GET',
			url:'https://api.twitch.tv/kraken/streams/'+streamer+'?callback=?',
			dataType:'JSON',
			success:function(data){
				if(data.stream===null){
					//offline users
					//console.log(data);
				}
				else if(data.status===422){
					//fake users
					//console.log(data);
				}
				else{
					//online users
					//console.log(data);
				}
			}
		});
	}
	offlineTest("ESL_SC2");
});




