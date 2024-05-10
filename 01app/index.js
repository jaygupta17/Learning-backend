const express = require('express')
const app = express()
const db = require('./MOCK_DATA.json')

app.get('/',(req,res)=>{
    console.log(req.url);
    res.send("Hii jay")
})

app.get('/users',(req,res)=>{
    let html=`
    ${db.map(user=> `<li>${user.email + " " + user.id}</li>`).join("")}
    `
    console.log(req.url);
    res.send(html)
})

app.get('/:id',(req,res)=>{
    let user = db.find((user)=>user.id==req.params.id)
    let html=`<li>${user.email + " " + user.id}</li>`
    console.log(req.url);
    res.send(html)
})


app.listen(8000 , ()=>console.log("Running"))