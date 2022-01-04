try {
    let pointregisterController = {};

    pointregisterController.getAllPointRegister = async (req, res) => {  
        if(connection){
            await connection.query(
                'SELECT * FROM point_register WHERE PR_Active=1 GROUP BY PR_Folio ORDER BY PR_Created DESC;',
                (err, rows) => {
                    if(err){
                        
                    } else {
                        res.status(200).json(rows);
                    }
                }
            );
        }
    };

    pointregisterController.getPointRegisterByEmail = async (req, res) => {  
        if(connection){
            await connection.query(
                "SELECT * FROM point_register WHERE PR_Email='"+req.params.email+"' AND PR_Active=1 AND PR_Total NOT IN (0) GROUP BY PR_Folio ORDER BY PR_Created DESC;",
                (err, rows) => {
                    if(err){
                        
                    } else {
                        res.status(200).json(rows);
                    }
                }
            );
        }
    };

    pointregisterController.addPointRegister = async (req, res) => {
        if(connection){
            await connection.query(
                "INSERT INTO point_register (PR_Folio, PR_Point, PR_Email, PR_Total) VALUES("+req.body.folio+", "+req.body.point+", '"+req.body.email+"', "+req.body.total+");",
                (err, rows) => {
                    if(err){
                        
                    } else {
                        res.status(200).json(rows);
                    }
                }
            );
        }
    };

    pointregisterController.updatePointRegisterStatus = async (req, res) => {  
        if(connection){
            await connection.query(
                "UPDATE point_register SET PR_Active=" + req.body.status + " WHERE PR_ID=" + req.body.prid + ";",
                (err, rows) => {
                    if(err){
                        
                    } else {
                        res.status(200).json(rows);
                    }
                }
            );
        }
    };

    pointregisterController.payPoints = async (req, res) => {  
        if(connection){
            await connection.query(
                "UPDATE point_register SET PR_Paid=1 WHERE PR_ID IN (" + req.body.array + ");",
                (err, rows) => {
                    if(err){
                        
                    } else {
                        res.status(200).json(rows);
                    }
                }
            );
        }
    };
    
    module.exports = pointregisterController;
} catch (error) {
    
}