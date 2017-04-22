var models = require('../models');
var db = require('../db/index.js');

db.connection.connect();

module.exports = {
  messages: {
    get: function (req, res) {
      // console.log('inside get messages controller')
      var stuff = db.connection.query('SELECT * FROM messages', function(err, results) {
        console.log(res)
          var obj = {};
          obj.message_text = results[0].message_text;
          obj.roomname= results[0].roomname;
          obj.username= results[0].username;
          res.end(JSON.stringify([obj]))
      
      });
      // console.log(stuff)
      // db.connection.query('SELECT * FROM messages');
      // models.messages.get(res);
      // models.messages.get(res);
    }, // a function which handles a get request for all messages
    post: function (req, res, callback) {
    	models.messages.post(req.body.username, req.body.roomname, req.body.message, callback);
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res, callback) {
    	models.users.post(req.body.username, callback);
    }
  }
};

