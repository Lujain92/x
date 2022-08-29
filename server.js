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
    // const result =dataWeather.map(item=>{
        
    //     // item.city_name
    //     // item.lat
    //     // item.lon

    // }
    //     )
}

)











server.listen(PORT,()=>{
    console.log(`hello on ${PORT}`)
}
)

