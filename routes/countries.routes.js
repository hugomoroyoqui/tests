try {
    const express = require('express');
    const router = express.Router();
    const countriesController = require('../controllers/countries.controller');

    router.get('/', countriesController.getCountries);
    router.post('/', countriesController.addCountry);

    module.exports = router;    
} catch(err) {

}