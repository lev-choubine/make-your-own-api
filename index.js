require('dotenv').config();
const mongoose =require('mongoose');
const express = require('express');
const app = express();
const Bando =require('./models/rhcp.js')

mongoose.connect(`mongodb://localhost/mongooseApi`)

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
    models.Bando.findOne({_id: req.params.id}).then((bounty) => {
      res.status(200).json({ bounty })
    })
    .catch((err) => { res.send(err) })
  })
  
  app.post('/', (req, res) => {
    models.Bando..create(req.body).then((bounty) => {
      res.status(201).json({ bounty })
    })
    .catch((err) => { res.send(err) })
  })
  
  app.put('/:id', (req, res) => {
    res.send('hello from PUT /bounties/:id')
  })
  
  app.delete('/:id', (req, res) => {
    res.send('hello from DELETE /bounties/:id')
  })

//////////////////////////////////////////////

app.get('./member', (req,res)=> {
    const rhcp = new Bando({former_members: ['Hillel Slovak','Jack Irons','Cliff Martinez','Jack Sherman','DeWayne McKnight','D. H. Peligro','Arik Marshall','Jesse Tobias','Dave Navarro', 'Josh Klinghoffer']})
    const flea =({name: 'Flea', image: "https://d26horl2n8pviu.cloudfront.net/link_data_pictures/images/000/334/371/shared_link/1200px-2016_RiP_Red_Hot_Chili_Peppers_-_Michael_Flea_Balzary_-_by_2eight_-_DSC0041.jpg?1539689224", joined_band: '1983'})
    const anthony =({name: 'Anthony Kiedis', image: "https://ilarge.lisimg.com/image/2654625/740full-anthony-kiedis.jpg", joined_band: '1983'})
    const chad =({name: 'Chad Smith', image: " https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/2016_RiP_Red_Hot_Chili_Peppers_-_Chad_Smith_-_by_2eight_-_DSC0184.jpg/220px-2016_RiP_Red_Hot_Chili_Peppers_-_Chad_Smith_-_by_2eight_-_DSC0184.jpg", joined_band: '1988'})
    const john =({name: 'John Frusciante', image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/JohnFruscianteAugust2006.jpg/220px-JohnFruscianteAugust2006.jpg", joined_band: '1989'})
    rhcp.vocal.push(anthony)
    rhcp.guitar.push(john)
    rhcp.bass.push(flea)
    rhcp.drums.push(chad)
})

const PORT = process.env.PORT || 3000;

app.listen( PORT, ()=> {
console.log(`Server listening to on PORT: ${PORT}`)})