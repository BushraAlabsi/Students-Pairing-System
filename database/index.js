
var mongoose = require('mongoose');

 mongoose.connect('mongodb://bushraalabsi:abcd1234@ds117469.mlab.com:17469/pairing', { useNewUrlParser: true, 

  useCreateIndex: true
 });

var db = mongoose.connection;

db.on('error', function(err) {

  console.log('mongoose connection error'+ err);
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

module.exports = db;