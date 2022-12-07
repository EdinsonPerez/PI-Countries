const { Router } = require('express');
const countryRoute = require('./country')
const activityRoute = require('./activity')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();
router.use('/country', countryRoute)
router.use('/activity', activityRoute)


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
