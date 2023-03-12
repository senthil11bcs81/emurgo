const axios = require('axios');
const { config } = require('../config/config');

/**
 * Query for searching the news across world
 * @param {Object} options - Query options
 * @param {string} [options.q] - query string
 * @param {string} [options.country] - filter by country
 * @param {string} [options.in] - where to perform search -> enum(title,description,content)
 * @param {string} [options.sortby] - sort the content
 * @returns {Promise<QueryResult>}
 */
const queryNews = async (options) => {
  console.log("inside queryNews",options);
  try{
  let url = `https://gnews.io/api/v4/search?lang=en&apikey=${config.API_KEY}`;
  for (const key in options) {
    url = url + '&' +key+'='+options[key];
  }
  const headlines = await axios.get(url);
  return headlines.data;
  } catch(err){
    console.log(err);
    return {
      'error':'Internal Server Error',
      'error_desc':'API KEY Expired'
    }
  }
};

/**
 * Query for top headlines across world
 * @param {Object} options - Query options
 * @param {string} [options.country] - filter by country
 * @param {string} [options.category] - filter by category
 * @returns {Promise<QueryResult>}
 */
const fetchTopHeadlines = async (options) => {
  console.log("inside fetchTopHeadlines",options);
  try{
  let url = `https://gnews.io/api/v4/top-headlines?lang=en&apikey=${config.API_KEY}`;
  for (const key in options) {
    url = url + '&' +key+'='+options[key];
  }
  const headlines = await axios.get(url);
  return headlines.data;
  } catch(err){
    console.log(err);
    return {
      'error':'Internal Server Error',
      'error_desc':'API KEY Expired'
    }
  }
};


module.exports = {
  fetchTopHeadlines,
  queryNews
};
