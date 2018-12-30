var express = require('express');
var router = express.Router();

var topic_controller  = require('../controllers/topicController');

router.get('/list',topic_controller.getTopics);

router.post('/newTopic',topic_controller.postTopic);

router.put('/edit/:id',topic_controller.editTopic);

router.delete('/delete/:id',topic_controller.deleteTopic);

module.exports = router;