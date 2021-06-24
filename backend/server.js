const express=require('express');
const products = require('./data/products');

const app=express()



app.get('/',(req,res)=>{
    res.send('Api si ruynnning')
})

app.get('/api/products',(req,res)=>{
    res.json(products)
})
app.listen(4000,(req,res)=>{
    console.log('server started at port 5000')
})