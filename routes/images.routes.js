try {
    const express = require('express');
    const router = express.Router();
    const imagesController = require('../controllers/images.controller');

    router.get('/', imagesController.getAllImages);


    module.exports = router;    
} catch(err) {

}