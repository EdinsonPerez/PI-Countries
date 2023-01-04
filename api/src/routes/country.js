const { Router } = require('express');
const {Country, Activity} = require('../db')
const router = Router();
const { Op } = require('sequelize')
const axios = require('axios')


const getApiInfo = async () => {
        const apiUrl = await axios.get('https://restcountries.com/v3/all');
        console.log(apiUrl)
        const apiInfo = await apiUrl.data.map((el) => {
            return {
                    id: el.cca3,
                    name: el.name.common,
                    flags: el.flags[1],
                    continent: el.continents[0],
                    capital: el.capital ? el.capital[0] : "Not found",
                    subregion: el.subregion ? el.subregion : "Not found",
                    area: el.area,
                    population: el.population,
                };
            });
        return apiInfo;
};

cont = 0;
const getDbInfo = async () => {
  if (cont < 1){
      const dbUrl = await axios.get('https://restcountries.com/v3/all');
          const dbInfo = dbUrl.data.map((el) => {
              Country.findOrCreate({
                  where: {
                      id: el.cca3,
                      name: el.name.common,
                      flags: el.flags[1],
                      continent: el.continents[0],
                      capital: el.capital ? el.capital[0] : "Not found",
                      subregion: el.subregion ? el.subregion : "Not found",
                      area: el.area,
                      population: el.population,
                  }
                 });
             });
    cont=cont + 1;        
  }  else {
    const allDbCountry = await Country.findAll();
  }

    
     
        //return dbInfo;
}


router.get('/', async (req, res, next) => {
    let name = req.query.name;
    try{

        if (name) {
            let allCountry = await getApiInfo();
            let countryName = await allCountry.filter((el) => el.name.toLowerCase().includes(name.toLowerCase()));
            countryName.length ?
            res.status(200).send(countryName) :
            res.status(404).send("El pais ingresado no existe");
        } else {
            let dbCountry = await getDbInfo();
           const allDbCountry = await Country.findAll();
           res.send(allDbCountry)
        }
    } catch(error) {
        next(error)
      }
        })
    




router.get('/:id', async (req, res, next) => {
    try {
        const id = req.params.id;
        let country
        response = await axios.get('https://restcountries.com/v3/alpha/' + id)
       country = response.data
       return res.status(201).send(country)
    } catch(error) {
      next(error)
    }
   })






router.post('/', async (req, res, next) => {
    try{

        const {id, nombre, imagen_bandera} = req.body;
        const newCountry = await Country.create({
            id,
            nombre,
            imagen_bandera
        })
          res.send(newCountry)
    } catch(error) {
    next(error)
  }
})





module.exports = router;
