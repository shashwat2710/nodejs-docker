const express =  require('express');
const mongoose = require('mongoose');

const {MONGO_USER, MONGO_PASS, MONGO_IP, MONGO_PORT}  = require('./config/config');


const app =  express();

const MONGO_URI = `mongodb://${MONGO_USER}:${MONGO_PASS}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`

const connectWithRetry = ()=>{
    mongoose.connect(MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>{
        console.log(`Successfully connected to database`)
    }).catch(e=> {console.log(e);console.log('Trying to connect to database...')
    
    setTimeout(connectWithRetry,5000)});

}

connectWithRetry();

app.get('/', (req,res)=>{
    res.send('<h2>Hi There!!</h2>')
})

const PORT =  process.env.port || 3000

app.listen(PORT, ()=> console.log(`Server Running on Port ${PORT}`));
