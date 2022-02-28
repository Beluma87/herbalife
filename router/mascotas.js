const express = require('express');
const router = express.Router();

const Mascota =  require('../models/mascota')

router.get('/', async (req, res) => {

    try{

        const arrayMascotasBD = await Mascota.find()
        console.log(arrayMascotasBD)

        res.render("mascotas", {
           //propidad : valores     
            arrayMascotas : arrayMascotasBD            
        })
        
    } catch( error){
        console.log(ERORRRRRR)
    }

    
})

module.exports = router;