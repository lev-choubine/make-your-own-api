const mongoose = require('mongoose');

const instrumentSchema = new mongoose.Schema({
    type: String,
    brand: String,
    color: String,
    year: String,
   
  

})

const memberSchema = new mongoose.Schema({
    name: String,
    image: String,
    joined_band: String,
    instruments: [instrumentSchema]
  

})
const albumSchema = new mongoose.Schema({
    name: String,
    year: String,
    label: String,
   
  

})

const bandSchema = new mongoose.Schema({
    band:String,
    members: [memberSchema],
    albums:[albumSchema]
    
})





module.exports = mongoose.model('bandos', bandSchema)

