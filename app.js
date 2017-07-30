var Twitter = require('twitter');
var api = require("./api.json");
// test comment
function printError(error){
	console.error(error.message);
}

var client = new Twitter({
  consumer_key: api.consumer_key,
  consumer_secret: api.consumer_secret,
  access_token_key: api.access_token_key,
  access_token_secret: api.access_token_secret
});
function get(query){ 
	var account = query[0];
	var params = {screen_name: account};
	var request = client.get('statuses/user_timeline', params, function(error, tweets, response) {
		console.log(response.statusCode);
		if(response.statusCode === 200){
			console.log(tweets[0].text);
		}else{
			printError({message : "there was a problem with getting latest tweet from "+account});
		}
	});

}

const query = process.argv.slice(2);

get(query);