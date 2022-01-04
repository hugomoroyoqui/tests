try {
    const express = require('express');
    const router = express.Router();
    const techsController = require('../controllers/techs.controller');

    router.get('/', techsController.getAllTechs);
    router.get('/:email/:n', techsController.getTechByEmail);  
    router.post('/', techsController.addTech);  
    router.put('/', techsController.updateTech);  
    router.put('/status/', techsController.updateStatus);  
    router.put('/image/', techsController.updateImage);

    module.exports = router;    
} catch(err) {

}