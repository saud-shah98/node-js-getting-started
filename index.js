  
var fs = require('fs')
var path = require('path');
var express = require('express');
const Yelp = require('./yelp');
const API_KEY = "FLMeJY8fzwqhc33W3NgcwHB3ivXaFmw3ImKNbySrooXJp7yC_nuytgj56g9zzHjQUcUzVP2dxqt-gTxdEYCIahSGkoU5WM9lOAe3lnwHVXumJQ7q6g0-ojYDDARNX3Yx"
const yelp = new Yelp({ apiKey: API_KEY  })

var app = express();

app.use(express.static('public'));


// Search
app.get('/api/search', (req,res) => {
    var phone = req.query.phone;
    if (!phone) {
      res.json({
        error: 'No Phone Number'
      })
    }

    yelp.search({phone})
    .then(data => {
      return res.json(data);
    })
    .catch(e => console.log("Error", e));  
})

app.get('/', (req,res) => {
  console.log(res.json(data));
})

app.listen(3000,()=> console.log("Application started on port 3000"))

