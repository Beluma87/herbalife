const mongoose = require('mongoose');
const Shema = mongoose.Schema;

const mascotaSchema = new Shema({
    name : String,
    description: String
})

//Create model
const Mascota = mongoose.model('Mascota', mascotaSchema);

module.exports = Mascota;