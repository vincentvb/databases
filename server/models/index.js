var db = require('../db/index.js');
var mysql = require('mysql');

// db.connection.connect();

module.exports = {
  messages: {
    get: function (res) {
      // console.log('IM IN THE MESSAGES MODEL!')
      var obj;
      var stuff = db.connection.query('SELECT * FROM messages', function(err, results) {
        // console.log(results[0])
        obj = {
          message_text: results[0].message_text,
          roomname: results[0].roomname,
          username: results[0].username
        }
      });
      
      res.end(JSON.stringify(obj))
      // console.log(stuff)
      // db.connection.query('SELECT * FROM messages');
    }, // a function which produces all the messages
    post: function (username, room_name, message_text, callback) {
      // console.log(username, room_name, message_text);
      var queryString = 'INSERT INTO messages (username, roomname, message_text) VALUES ("'+username+'", "'+room_name+'", "'+message_text+'")'
      db.connection.query(queryString, function() {
        // console.log("POSTED!")
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

