const axios = require('axios');


async function weatherHandler(req,res) {
    const lon = req.query.lon;
    const lat = req.query.lat;
    const URL = `http://api.weatherbit.io/v2.0/forecast/daily?key=${process.env.WEATHER_KEY}&lon=${lon}&lat=${lat}`;
    
    axios
    .get(URL)
    .then( weatherR => {
        let sendData = weatherR.data.data.map( item => {
            return new weatherData(item);
        })
        return res.status(200).send(sendData);
    }).catch(error => {
        return res.status(404).send(error)
    })
}


class weatherData {
    constructor(item){
        this.datetime = item.datetime;
        this.low_temp = item.low_temp;
        this.max_temp = item.max_temp;
        this.description = item.weather.description;
    }
}









module.exports = weatherHandler;