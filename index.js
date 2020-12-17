require('dotenv').config();
const mongoose =require('mongoose');
const express = require('express');
const app = express();
const models = require('./models')

// mongoose.connect(`mongodb://localhost/makeApi`)

// const db = mongoose.connection;

// db.once('open', () => {
//     console.log(`Connected to MongoDB on ${db.host}:${db.port}`)
// })

// db.on('error', (err)=>{console.log('Error', ErrorEvent)})

app.use(express.urlencoded({ extended: false}))

app.get('/',(req, res)=>{
    res.send('Bando, Moteru')
})

app.use('/bando', require('./api/api'))
/////////////////////////////////////////////


//////////////////////////////////////////////

// ≈

const PORT = process.env.PORT || 5000;

app.listen( PORT, ()=> {
console.log(`Server listening to on PORT: ${PORT}`)})