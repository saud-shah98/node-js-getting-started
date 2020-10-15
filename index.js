  
var fs = require('fs')
require('dotenv').config();
var path = require('path');
var express = require('express');
var cors_proxy = require('cors-anywhere');

const Yelp = require('./yelp');
const API_KEY = "FLMeJY8fzwqhc33W3NgcwHB3ivXaFmw3ImKNbySrooXJp7yC_nuytgj56g9zzHjQUcUzVP2dxqt-gTxdEYCIahSGkoU5WM9lOAe3lnwHVXumJQ7q6g0-ojYDDARNX3Yx"
const yelp = new Yelp({ apiKey: API_KEY  })



var app = express();


app.use(express.static('public'));
app.use((req,res,next) => {
  res.header("Access-Control-Allow-Origin","*");
  res.header("Access-Control-Allow-Methods","GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
  next();
})


// Search
app.get('/api/search', (req,res) => {
    var phone = req.query.phone;
    if (!phone) {
      res.json({
        error: 'No Phone Number'
      })
    }
    // res.setHeader("Access-Control-Allow-Origin", "*");
   
    yelp.search({phone})
    .then(data => {
      return res.send(JSON.stringify(data));
    })
    .catch(e => console.log("Error", e));  
})

app.get('/', (req,res) => {
  console.log(res.json(data));
})

app.listen(process.env.PORT || 3000,()=> console.log("Application started on port 3000"))

