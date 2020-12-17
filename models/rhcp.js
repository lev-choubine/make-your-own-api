const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
    name: String,
    image: String,
    joined_band: String,
  

})

const bandSchema = new mongoose.Schema({
    vocal: [memberSchema],
    guitar: [memberSchema],
    bass: [memberSchema],
    drums: [memberSchema],
    former_members: [String]

})





module.exports = mongoose.model('bandos', bandSchema)

