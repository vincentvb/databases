var db = require('../db/index.js');
var mysql = require('mysql');

db.connection.connect();

module.exports = {
  messages: {
    get: function () {
      db.connection.query('SELECT message_text FROM messages', function(err, res) {
        if (err) {
          console.log('Something went wrong!');
          throw err;
        } else {
          // Do something...
        }
      });
    }, // a function which produces all the messages
    post: function (username, room_name, message_text) {
      console.log(username, room_name, message_text);
      var queryString = 'INSERT INTO messages (username, roomname, message_text) VALUES ("'+username+'", "'+room_name+'", "'+message_text+'"'
      db.connection.query(queryString, function() {
        console.log("POSTED!")
      });
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

