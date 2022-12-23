const express = require('express')
const  k  = require('./mail.service')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send(k.t());
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.post('/',(req,res)=>{
  res.send('{kk:12}');
  console.log("test",req);
})
