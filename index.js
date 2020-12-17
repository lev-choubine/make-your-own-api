require('dotenv').config();
const mongoose =require('mongoose');
const express = require('express');
const app = express();
const models = require('./models')

mongoose.connect(`mongodb://localhost/makeApi`)

const db = mongoose.connection;

db.once('open', () => {
    console.log(`Connected to MongoDB on ${db.host}:${db.port}`)
})

db.on('error', (err)=>{console.log('Error', ErrorEvent)})

app.use(express.urlencoded({ extended: false}))

app.get('/',(req, res)=>{
    res.send('Bando, Moteru')
})

/////////////////////////////////////////////
app.get('/:id', (req, res) => {
    models.Bando.findOne({_id: req.params.id}).then((bando) => {
      res.status(200).json({ bando })
    })
    .catch((err) => { res.send(err) })
  })
  
  app.post('/', (req, res) => {
    models.Bando.create(req.body).then((bando) => {
      res.status(201).json({ bando })
    })
    .catch((err) => { res.send(err) })
  })
  
  app.put('/:id', (req, res) => {
    res.send('hello from PUT /bando/:id')
  })
  
  app.delete('/:id', (req, res) => {
    res.send('hello from DELETE /bando/:id')
  })

//////////////////////////////////////////////

// ≈

const PORT = process.env.PORT || 3000;

app.listen( PORT, ()=> {
console.log(`Server listening to on PORT: ${PORT}`)})