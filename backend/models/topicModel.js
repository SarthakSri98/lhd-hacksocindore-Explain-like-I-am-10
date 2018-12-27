var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var topicSchema = new Schema({
     title : { type:String , required:true , max:100 },
     tags :  { type:String , required:true , max:100 },
     description : { type:String , required:true , max:3000 }

})

module.exports = mongoose.model('topic',topicSchema);