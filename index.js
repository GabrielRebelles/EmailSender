require("dotenv").config()
const express = require("express")
const app = express()
const routes= require("./api/network")

app.use(express.json())

app.use('/',routes)

app.use((req,res)=>{
    res.redirect('/')
})


const server = app.listen(3000,()=>{
    console.log(`Server corriendo en http://localhost:${server.address().port}`);
})