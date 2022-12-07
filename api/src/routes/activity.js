const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

router.get('/', (req, res, next) => {
    res.send('soy get /activity')
})

router.post('/', (req, res, next) => {
    res.send('soy post /activity')
})

router.put('/', (req, res, next) => {
    res.send('soy put /activity')
})

router.delete('/', (req, res, next) => {
    res.send('soy delete /activity')
})


module.exports = router;
