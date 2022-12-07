const { Router } = require('express');
const {Country} = require('../db')
const router = Router();

router.get('/', (req, res, next) => {
    return Country.findAll()
    .then((country) =>{
        res.send(country)
    })
})

router.post('/', async (req, res, next) => {
    const {id, nombre, imagen_bandera} = req.body;
    const newCountry = await Country.create({
        id,
        nombre,
        imagen_bandera
    })
      res.send(newCountry)
})

router.put('/', (req, res, next) => {
    res.send('soy put /country')
})

router.delete('/', (req, res, next) => {
    res.send('soy delete /country')
})



module.exports = router;
