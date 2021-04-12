const express=require("express")
const router = express.Router()
const sendEmail = require("./sender")


router.get("/",(req,res,next)=>{
    res.send("Hola mundo")
})
router.post("/sendEmail",(req,res,next)=>{
    sendEmail(req.body)
    .then(()=>{res.send("Correo enviado")})
    .catch(()=>{res.send("Error al enviar el correo")})    
})


module.exports=router