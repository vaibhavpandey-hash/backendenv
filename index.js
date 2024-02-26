require('dotenv').config()
console.log("chai aur code")
const express= require("express")
const app= express()
const port=4000
app.get('/hello',(req,res)=>{
    res.send("Chai Aur Code")
})
app.listen(process.env.PORT,()=>{
    console.log(`Listening on ${port}`)
}

)