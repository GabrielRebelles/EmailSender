require("dotenv").config()
const express = require("express")
const app = express()
const routes= require("./api/network")
const path = require("path")

app.use(express.json())

app.use('/',express.static(path.join(__dirname,"public")))
app.use('/api',routes)

app.use((req,res)=>{
    res.redirect('/')
})


const server = app.listen(3000,()=>{
    console.log(`Server corriendo en http://localhost:${server.address().port}`);
})