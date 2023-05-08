const Express=require('express')

const app = Express();
const cronJob = require("./cron")
const api=require('./api.js')

cronJob()
app.listen(3000,()=>{
    console.log("Express listening on PORT 3000")
})

app.use((req, res, next)=>{
    console.log('1.Inside Middleware one')
    res.send("Sending directly")
    next()
})

app.get("/",(req,res)=>{
    console.log('2.Inside Router Function')
    res.send("<h1 style='color:red'>Express arrived 🚆 at 3️⃣0️⃣0️⃣0️⃣0️⃣</h1")
})

app.use((req,res,next,err)=>{
    console.log("Error")
    console.log('Welcome to Error Handler Middleware')
    return err
})