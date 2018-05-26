const Twitter = require("twitter");
//so we can use the same twitter client where we need it :)
module.exports = new Twitter({
  consumer_key: process.env.CONSUMER_KEY, //load from environnement variables
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token_key: process.env.ACCESS_TOKEN_KEY,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET
});
