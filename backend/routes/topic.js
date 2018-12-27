var express = require('express');
var router = express.Router();

var topic_controller  = require('../controllers/topicController');

router.get('/',topic_controller.getTopics);

router.post('/create',topic_controller.postTopic);

router.post('/:id/edit',topic_controller.editTopic);

router.post('/:id/delete',topic_controller.deleteTopic);

module.exports = router;