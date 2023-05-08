const axios = require('axios');
const https = require("https");
axios.defaults.timeout = 30000;
axios.defaults.httpsAgent = new https.Agent({ keepAlive: true });

const  requestData= async()=>{
let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: 'https://www.fruityvice.com/api/fruit/mango',
  headers: { }
};

axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
  return JSON.stringify(response.data);
})
.catch((error) => {
  console.log(error);
});


}

requestData();

module.exports=requestData


