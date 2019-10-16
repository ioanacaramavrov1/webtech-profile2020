const express = require('express')
const app = express()

//directorul din care vreau sa imi fie servite acele fisiere statice  (express.static)
//'/' directorul curent 
app.use('/', express.static('frontend'))
app.get('/hello', function (req, res) {
  res.send('Hello World')
})
 
app.listen(8080)