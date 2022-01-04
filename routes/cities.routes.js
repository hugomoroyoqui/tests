try {
    const express = require('express');
    const router = express.Router();
    const citiesController = require('../controllers/cities.controller');

    router.get('/', citiesController.getCities);
    router.get('/:id', citiesController.getCitiesByCountry);
    router.get('/byid/:id', citiesController.getCityByID);
    router.post('/', citiesController.addCity);
    router.put('/', citiesController.updateCity);
    router.put('/status/', citiesController.updateStatus);
    router.put('/discount/', citiesController.applyDiscount);

    module.exports = router;    
} catch(err) {

}