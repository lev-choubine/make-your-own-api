const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI + '/makeApi', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

module.exports = {
  Bando: require('./rhcp'),
}