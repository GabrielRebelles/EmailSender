require("dotenv").config()
const express = require("express")
const app = express()
const routes= require("./api/network")
const path = require("path")

const PORT = process.env.PORT || 3000;

app.use(express.json())

app.use('/',express.static(path.join(__dirname,"public")))
app.use('/api',routes)

app.use((req,res)=>{
    res.redirect('/')
})


const server = app.listen(PORT,()=>{
    console.log(`Server corriendo en http://localhost:${server.address().port}`);
})