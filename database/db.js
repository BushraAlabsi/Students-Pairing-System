var mongoose = require('mongoose');

var studentSchema = mongoose.Schema({
  name   : String,
  level     : Number
});

var historySchema = mongoose.Schema({
  table   : [{student1: String , student2: String}]
});


var Student = mongoose.model('Student', studentSchema);

var History = mongoose.model('History', historySchema);

module.exports.Student = Student;

module.exports.History = History;
