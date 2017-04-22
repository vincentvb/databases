var db = require('../db/index.js');
var mysql = require('mysql');

db.connection.connect();

module.exports = {
  messages: {
    get: function (res) {
      var stuff = db.connection.query('SELECT * FROM messages', function(err, results) {
        var obj = {}; // Probably will need to work on this ^^^^^^^^^^^^^^
        obj.message_text = results[0].message_text;
        obj.roomname= results[0].roomname;
        obj.username= results[0].username;
        res.end(JSON.stringify([obj]))
      });

    }, // a function which produces all the messages
    post: function (username, room_name, message_text, callback) {
      var queryString = 'INSERT INTO messages (username, roomname, message_text) VALUES ("'+username+'", "'+room_name+'", "'+message_text+'")'
      db.connection.query(queryString, function() {
      });
      callback();
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function (userName, callback) {
       db.connection.query('INSERT INTO users (name) VALUES ("'+userName+'")');
       callback();
    }
  }
};

