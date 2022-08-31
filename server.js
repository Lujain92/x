require('dotenv').config()
const express = require('express')
const cors =require('cors')
const server=express()

const PORT=process.env.PORT || 3001;

server.use(cors())
const weatherHandler=require("./weatherHandler")
const movieHandler=require("./movieHandler")

server.get('/',(req,res)=>{
    res.send("Hello from the home route");
})
server.get('/test',(req,res) => {
    console.log("test route");
    res.send('Hi from the test roure');
})

server.get('/weather',weatherHandler)

server.get('/movie', movieHandler);

server.get('*',(req,res)=>{
    res.send("404");
})



server.listen(PORT,()=>{
    console.log(`hello on ${PORT}`)
}
)

