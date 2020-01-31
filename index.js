const ig = require('instagram-scraping');
const express = require('express')
const app = express()
const port = 3000;

app.get('/ig', function (req, res) {
  ig.scrapeUserPage('aclearing.maine').then(result => {
      res.send(result);
  });
})

app.listen(port, () => console.log(`listening on port ${port}!`))