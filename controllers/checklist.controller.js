try {
    let checklistController = {};

    checklistController.getCheckList = async (req, res) => {  
        if(connection){
            await connection.query(
                "SELECT * FROM check_list_assistance WHERE CLA_Email='"+req.params.email+"' AND CLA_Type="+req.params.type+" ORDER BY CLA_Date DESC LIMIT "+req.params.limit+";",
                (err, rows) => {
                    if(err){
                        
                    } else {
                        res.status(200).json(rows);
                    }
                }
            );
        }
    };

    checklistController.getAllUserCheckList = async (req, res) => {  
        if(connection){
            await connection.query(
                "SELECT * FROM check_list_assistance WHERE CLA_Email='"+req.params.email+"' AND CLA_Status=1 ORDER BY CLA_Date DESC LIMIT 100;",
                (err, rows) => {
                    if(err){
                        
                    } else {
                        res.status(200).json(rows);
                    }
                }
            );
        }
    };
    
    checklistController.addCheckList = async (req, res) => {
        if(connection){
            await connection.query(
                "INSERT INTO check_list_assistance (GT_ID, CLA_Email, CLA_Photo, CLA_Lat, CLA_Lng, CLA_Type, CLA_Unixtime) values ("+req.body.GT_ID+", '"+req.body.CLA_Email+"', '"+req.body.CLA_Photo+"', "+req.body.CLA_Lat+", "+req.body.CLA_Lng+", "+req.body.CLA_Type+", "+req.body.CLA_Unixtime+");",
                (err, rows) => {
                    if(err){
                        
                    } else {
                        res.status(200).json(rows);
                    }
                }
            );
        }
    };

    checklistController.changeStatus = async (req, res) => {
        if(connection){
            await connection.query(
                "UPDATE check_list_assistance SET CLA_Status="+req.body.status+" WHERE CLA_ID="+req.body.claid+";",
                (err, rows) => {
                    if(err){
                        
                    } else {
                        res.status(200).json(rows);
                    }
                }
            );
        }
    };

    module.exports = checklistController;
} catch (error) {
    
}