require('dotenv').config();
const requestData = require('./api.js')
var cron = require('node-cron');
console.log(process.env.CRONJOBFDNDATAREFRESH)
let now=new Date();
const cronJob= ()=>{
    console.log("Inside cronJob")
    cron.schedule('*/3 * * * * *', async () => {
        const data=await requestData()
        console.log(data)
        console.log('running a task every 10 seconds',now);
      
      });
}


module.exports =cronJob