const router = require('express').Router()

const models = require('../models')

router.get('/', (req, res) => {
    models.Bando.find().then((foundBounties) => {
      res.status(200).json({ bands: foundBounties })
    })
    .catch((error) => res.send({ error }))
  })
  
  router.get('/:id', (req, res) => {
    models.Bando.findOne({band: req.params.id}).then((bounty) => {
      res.status(200).json({ band })
    })
    .catch((error) => res.send({ error }))
  })
  
  router.post('/', (req, res) => {  
    models.Bando.create(req.body).then((bounty) => {
      res.status(201).json({ band })
    })
    .catch((error) => {
      console.log(error);
      res.status(400)
    })
  })

  router.put('/:id', (req, res) => {
  
  const { wantedFor, client, reward, hunters, captured, lastSeen } = req.body
  
  models.Bounty.update({
    _id: req.params.id
  }, {$set: {
    wantedFor,
    client,
    reward,
    hunters,
    captured,
    lastSeen
  }})
  .then((bounty) => {
    res.status(201).json({ band })
  })
  .catch((error) => res.send({ error }))
})

router.delete('/:id', (req, res) => {
  models.Bando.deleteOne({ _id: req.params.id })
  .then((bounty) => res.status(201).json({ band }))
  .catch((error) => res.send({ error }))
})

module.exports = router