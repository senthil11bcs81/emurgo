const express = require('express');
const newsController = require('../../controllers/news.controller');
const router = express.Router();

router.get('/search', newsController.queryNews);
router.get('/top_headlines', newsController.getTopHeadlines);

module.exports = router;
