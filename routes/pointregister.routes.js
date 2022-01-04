try {
    const express = require('express');
    const router = express.Router();
    const pointregisterController = require('../controllers/pointregister.controller');

    router.get('/', pointregisterController.getAllPointRegister);
    router.post('/', pointregisterController.addPointRegister);  
    router.get('/:email/:n', pointregisterController.getPointRegisterByEmail);  
    router.put('/', pointregisterController.updatePointRegisterStatus);
    router.put('/pay', pointregisterController.payPoints);   

    module.exports = router;    
} catch(err) {

}