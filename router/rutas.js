const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    //res.send('Hello Worldddddddd!')
    res.render("index", {})
})

router.get('/servicio', (req, res) => {
    res.render("servicio", {titulo_server: 'TITLE DINAMIC SERVICIOSSSSS'})
})

module.exports = router;