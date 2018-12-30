var async = require('async');
var topic = require('../models/topicModel');

exports.getTopics = function(req,res)
{
   topic.find().exec((err,topic_list)=>{
       res.status(200).json({error:err , data:topic_list});
       console.log('get topic',topic_list);
       console.log(err);

   })
}

exports.postTopic = function(req,res)
{
    console.log(req.body);
    var newTopic = new topic({
        title : req.body.title,
        tags : req.body.tags,
        description : req.body.description

    });
    console.log("New topic is",newTopic);
    newTopic.save().then( createdTopic=>{
        res.status(201).json({
            message : "Topic created succesfully",
            data :{
                ...createdTopic,
                _id : createdTopic._id
            }
        });
    });

    
}

exports.editTopic = function(req,res)
{

}

exports.deleteTopic = function(res,res)
{

}