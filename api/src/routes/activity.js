const { Router } = require('express');
const {Country, Activity} = require('../db')
const axios = require('axios')


const router = Router();

router.post('/', async (req, res, next) => {
    try {
        let { name, description, difficulty, duration, season, createInDb, country } = req.body;
        let activityCreated = await Activity.create({
            name,
            description,
            difficulty,
            duration,
            season,
            createInDb
        })
        let countryDb = await Country.findAll({
            where: { name : country }
        })
        activityCreated.addCountry(countryDb)
        res.send('Actividad creada con exito')
    } catch(error){
        next(error)
        }
       
});



module.exports = router;
