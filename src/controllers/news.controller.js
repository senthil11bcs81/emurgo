const pick = require('../utils/pick');
const catchAsync = require('../utils/catchAsync');
const { newsService } = require('../services');



const getTopHeadlines = catchAsync(async (req, res) => {
  const options = pick(req.query, ['country', 'category', 'max']);
  const result = await newsService.fetchTopHeadlines(options);
  res.send(result);
});

const queryNews = catchAsync(async (req, res) => {
  const options = pick(req.query, ['q', 'country', 'in','sortby','max']);
  const result = await newsService.queryNews(options);
  res.send(result);
});



module.exports = {
  queryNews,
  getTopHeadlines,
};
