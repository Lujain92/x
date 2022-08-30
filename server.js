require('dotenv').config()
const express = require('express')
const dataWeather =require('./data/ weather.json')
const cors =require('cors')
const server=express()

const PORT=process.env.PORT;

server.use(cors())
//http:localhost:3000/weather?lat=latvalue & lon=lonvalue & searchQuery=cityname

server.get('/weather',(req,res)=>{
    console.log(req.query)
    let nameCity=dataWeather.find(city=>{
        if (req.query.city_name===city.city_name){
            let arrDate=city.data.reduce((acc,date)=>{
                acc['date']=date.valid_date
                acc['description']=date.weather.description
                return acc


            }
            
            ,{})
            return arrDate
        }




    })
    res.send(nameCity)
})







server.listen(PORT,()=>{
    console.log(`hello on ${PORT}`)
}
)

