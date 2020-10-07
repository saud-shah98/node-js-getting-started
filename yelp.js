const axios = require("axios");

class Yelp {

    constructor({apiKey=""}){
        this.fetch = axios.create({
            baseURL: "https://api.yelp.com/v3"
        });

        this.fetch.defaults.headers.common['Authorization'] = `Bearer ${apiKey}`;
        this.fetch.defaults.headers.common['Content-Type'] = "application/json";
    
    }

    search(params={}){
        return this.fetch("/businesses/search/phone", {params})
        .then(res => res.data)
    }
}

module.exports = Yelp;