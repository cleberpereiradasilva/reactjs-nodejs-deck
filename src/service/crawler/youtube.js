var https = require('https');
var cheerio = require('cheerio');
var Promise = require('bluebird');

module.exports = function (query) {
  const url = `https://www.youtube.com/user/univesptv/videos`
  return new Promise(function (resolve, reject) {
    try {
      https.get(url, function(res) {
        var data = '';
        var results = [];

        res.on('data', function(chunk) {
          data += chunk;
        });

        res.on('end', function() {
          var $ = cheerio.load(data);
          var videos = $('.ytd-grid-renderer');
            console.log(videos);

          resolve(results);
        });
      });
    } catch (err) {
      reject(err);
    }
  });
};
