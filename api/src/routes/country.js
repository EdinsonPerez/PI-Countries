const { Router } = require('express');
const {Country, Activity} = require('../db')
const router = Router();
const { Op } = require('sequelize')
const axios = require('axios')


const getApiInfo = async () => {
        const apiUrl = await axios.get('https://restcountries.com/v3/all');
        //console.log(apiUrl)
        const apiInfo = await apiUrl.data.map(el => {
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
            })
        })
}




router.get('/', async (req, res, next) => {
    let name = req.query.name
    let countryPromiseApi
    let countryPromiseDb
    if(name) {
        countryPromiseApi = axios.get(`https://restcountries.com/v3/name/${name}`) // promesa
        countryPromiseDb = Country.findAll({ //promesa
             include: Activity, 
            where: {
               name: {
                    [Op.iLike]: "%" + name + "%"
                }
           },
          order: [
              ['name', 'ASC'],
                
          ],
      })

      
    Promise.all([
        countryPromiseApi,
        countryPromiseDb
    ])
     .then((respuesta) => {
         const [
             countryApi,//respuesta de la APÏ
             countryDb //respuesta de mi base de datos
            ] = respuesta // mis respuestas
            
            let filteredCountryApi = countryApi.data.map((country)=> {
                return {
                    id: country.cca3,
                    name: country.name.common,
                    flags: country.flags[1],
                    continent: country.continents[0],
                    capital: country.capital ? country.capital[0] : "Not found",
                    subregion: country.subregion ? country.subregion : "Not found",
                    area: country.area,
                    population: country.population,
                }
            })
            // ordenar para ponerlos de menor a mayor
            let allCountry = [...filteredCountryApi,...countryDb]
            res.send(allCountry)
        })
        .catch(error => next(error))
    }else {
        let countryTotal = await getApiInfo();
        
        const allCountry = await Country.findAll();
        res.send(allCountry); 
    }
    })

    router.get('/?name', async (req, res, next) => {
        const name = req.query.name;
         let countryPromiseAPI
         PromiseAPI = await axios.get(`https://restcountries.com/v3/name/?${name}`)
         countryPromiseAPI = PromiseAPI.data
       return res.status(201).send(countryPromiseAPI)
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
    const {id, nombre, imagen_bandera} = req.body;
    const newCountry = await Country.create({
        id,
        nombre,
        imagen_bandera
    })
      res.send(newCountry)
})





module.exports = router;
