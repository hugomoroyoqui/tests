try {
    const express = require('express');
    const router = express.Router();
    const checklistController = require('../controllers/checklist.controller');

    router.get('/:email/:type/:limit', checklistController.getCheckList);
    router.get('/:email/:n', checklistController.getAllUserCheckList);
    router.post('/', checklistController.addCheckList);
    router.put('/', checklistController.changeStatus);

    module.exports = router;    
} catch(err) {

}