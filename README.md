# checkout the project

checkout the project from git link - https://github.com/senthil11bcs81/emurgo.git


## Steps to install the dependencies

npm install

This will install the required node_modules and dependencies.

## Steps to run the project

npm start

## API Endpoint's

1. http://localhost:9001/v1/news/top_headlines?category=sports&country=india&max=10 -> gives the top headlines data across the world. We can filter the data by providing the category and country field value.

2.http://localhost:9001/v1/news/search?q=Intel AND (i7 OR i9)&country=us&in=title,description&sortby=publishedAt&max=10  -> search the news across the world. 
q -> query param string (support boolean logical queries)
country -> filter the data by country
sortby -> sort the result data by providing the column name. Ex: publishedAt
in -> where to perform the search. The availble fields are title,description,content. We can give any one field or all fields. The actual query param will look and match it in (title,content,description).

max=10 This is limited. Since its free plan of gnews api. The pagination is available only on pricing plans.
