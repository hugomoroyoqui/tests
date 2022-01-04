try {
    const express = require('express');
    const router = express.Router();
    const aperturesController = require('../controllers/apertures.controller');
    
    router.get('/', aperturesController.getApertures); 
    router.get('/:id/:n', aperturesController.getApertureByID);  
    router.post('/', aperturesController.addAperture); 
    router.put('/', aperturesController.updateAperture); 
    
    module.exports = router;   
} catch (error) {
    
}