try {
    let rewardsController = {};

    rewardsController.getRewardsByTechType = async (req, res) => {
        if(connection){
            await connection.query(
                "SELECT * FROM rewardsproducts WHERE RP_Type=" + req.params.type + " AND RP_Status=1 ORDER BY RP_ID ASC;",
                (err, rows) => {
                    if(err){
                        
                    } else {
                        res.status(200).json(rows);
                    }
                }
            );
        }
    };

    rewardsController.changeReward = async (req, res) => {
        if(connection){
            await connection.query(
                "INSERT INTO rewards (RP_ID, GT_ID) VALUES(" + req.body.rpid + ", " + req.body.gtid + ");",
                (err, rows) => {
                    if(err){
                        
                    } else {
                        res.status(200).json(rows);
                    }
                }
            );
        }
    };

    rewardsController.updateProductStatus = async (req, res) => {
        if(connection){
            await connection.query(
                "UPDATE rewardsproducts SET RP_Status=" + req.body.status + " WHERE RP_ID=" + req.body.rpid + "",
                (err, rows) => {
                    if(err){
                        
                    } else {
                        res.status(200).json(rows);
                    }
                }
            );
        }
    };

    rewardsController.updateRewardStatus = async (req, res) => {
        if(connection){
            await connection.query(
                "UPDATE rewards SET R_Status=" + req.body.status + ", R_Comments='"+ req.body.comments +"' WHERE R_ID=" + req.body.rid + "",
                (err, rows) => {
                    if(err){
                        
                    } else {
                        res.status(200).json(rows);
                    }
                }
            );
        }
    };

    rewardsController.getRewardsByGTID = async (req, res) => {
        if(connection){
            await connection.query(
                "SELECT r.R_ID, r.RP_ID, r.GT_ID, r.R_Date, r.R_Comments, r.R_Status, rp.RP_Name, rp.RP_Photo, rp.RP_Description " +
                "FROM rewards as r " +
                "INNER JOIN rewardsproducts as rp " + 
                "ON r.RP_ID = rp.RP_ID " +
                "WHERE r.GT_ID = " + req.params.gtid + " " +
                "ORDER BY r.R_Status DESC;",
                (err, rows) => {
                    if(err){
                        
                    } else {
                        res.status(200).json(rows);
                    }
                }
            );
        }
    };

    rewardsController.getAllRewards = async (req, res) => {
        if(connection){
            await connection.query(
                "SELECT r.R_ID, r.RP_ID, r.GT_ID, r.R_Date, r.R_Comments, r.R_Status, " +
                "rp.RP_Name, rp.RP_Photo, rp.RP_Description, rp.RP_Points, rp.RP_Type, " + 
                "gt.GT_Email, gt.GT_Name, gt.GT_Image " +
                "FROM rewards as r " +
                "INNER JOIN rewardsproducts as rp " + 
                "ON r.RP_ID = rp.RP_ID " +
                "INNER JOIN gps_techs as gt " +
                "ON r.GT_ID = gt.GT_ID " +  
                "WHERE r.R_Status = " + req.params.status + " " +
                "ORDER BY r.R_ID DESC;",
                (err, rows) => {
                    if(err){
                        
                    } else {
                        res.status(200).json(rows);
                    }
                }
            );
        }
    };

    module.exports = rewardsController;
} catch (error) {
    
}