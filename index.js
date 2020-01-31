const ig = require('instagram-scraping');
const express = require('express')
const app = express()
const port = 3000;

// respond with "hello world" when a GET request is made to the homepage
app.get('/ig', function (req, res) {
  ig.scrapeUserPage('aclearing.maine').then(result => {
      res.send(result);
  });
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))