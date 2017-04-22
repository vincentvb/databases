var models = require('../models');

var defaultCorsHeaders = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10 // Seconds.
};
var headers = defaultCorsHeaders;
headers['Content-Type'] = 'text/plain';

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get(res);
    }, // a function which handles a get request for all messages
    post: function (req, res, callback) {
      console.log('IN CONTROLLER MESSAGE POST:', req.body);
    	// models.messages.post(req.body.username, req.body.roomname, req.body.message, callback);
      models.messages.post(req.body.username, req.body.roomname, req.body.text, callback);
    }, // a function which handles posting a message to the database
    options: function(req, res) {
      res.writeHead(200, headers);
      res.end("You have access!")
    }
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res, callback) {
    	models.users.post(req.body.username, callback);
    }
  }
};

