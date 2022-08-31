require('dotenv').config()
const express = require('express')
 const dataWeather =require('./data/ weather.json')
const cors =require('cors')
const server=express()

const PORT=process.env.PORT || 3001;

server.use(cors())
//http://localhost:3001/weather?lat=latvalue & lon=lonvalue & searchQuery=cityname
//http://localhost:3001/

server.get('/',(req,res)=>{
    res.send("Hello from the home route");
})
server.get('/test',(req,res) => {
    console.log("test route");
    res.send('Hi from the test roure');
})

server.get('/weather',weatherHandler)


 function weatherHandler  (req,res){
    let x=req.query.nameC
    res.send("hii")
    let nameCity=dataWeather.find(city=>
        {
            if(x.toLowerCase()==city.city_name.toLowerCase()){
                return city.timezone
            }
           
        }

    )
    res.send(nameCity)


//     let dataArr=dataWeather.map(item=>{
//         return new dataWeather(item)

//     }

//     )

 
}

// class DataW {
//     constructor(item){
//         this.c
//     }
// }


// server.get('/weather',(req,res)=>{
//     console.log(req.query)
//     let nameCity=dataWeather.find(city=>{
//         if (req.query.city_name===city.city_name){
//             let arrDate=city.data.reduce((acc,date)=>{
//                 acc['date']=date.valid_date
//                 acc['description']=date.weather.description
//                 return acc


//             }
            
//             ,{})
//             return arrDate
//         }




//     })
//     res.send(nameCity)
// })







server.listen(PORT,()=>{
    console.log(`hello on ${PORT}`)
}
)

