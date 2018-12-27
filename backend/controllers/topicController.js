var async = require('async');
var topic = require('../models/topicModel');

exports.getTopics = function(req,res)
{
   topic.find({},'title tags description').exec((err,topic_list)=>{
       res.status(200).json({error:err , data:topic_list})
   })
}

exports.postTopic = function(req,res)
{

}

exports.editTopic = function(req,res)
{

}

exports.deleteTopic = function(res,res)
{
    
}