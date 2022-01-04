try {
    const express = require('express');
    const router = express.Router();
    const rewardsController = require('../controllers/rewards.controller');

    router.get('/:type/:n', rewardsController.getRewardsByTechType);
    router.post('/', rewardsController.changeReward);
    router.put('/product/', rewardsController.updateProductStatus);
    router.put('/reward/', rewardsController.updateRewardStatus);   
    router.get('/reward/:gtid/:n', rewardsController.getRewardsByGTID);
    router.get('/:status', rewardsController.getAllRewards);


    module.exports = router;    
} catch(err) {

}