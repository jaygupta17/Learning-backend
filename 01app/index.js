const express = require('express')
const app = express()
const db = require('./MOCK_DATA.json')

app.get('/',(req,res)=>{
    console.log(req.url);
    res.send("Hii jay")
})

app.get('/users',(req,res)=>{
    let html=`
    ${db.map(user=> `<li>${user.email}</li>`).join("")}
    `
    console.log(req.url);
    res.send(html)
})


app.listen(8000 , ()=>console.log("Running"))