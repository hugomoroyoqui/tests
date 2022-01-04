try {
    let techsController = {};

    techsController.getAllTechs = async (req, res) => {
        if(connection){
            await connection.query(
                'SELECT * FROM gps_techs ORDER BY GT_Name',
                (err, rows) => {
                    if(err){
                        
                    } else {
                        res.status(200).json(rows);
                    }
                }
            );
        }
    };

    techsController.getTechByEmail = async (req, res) => {
        if(connection){
            await connection.query(
                "SELECT * FROM gps_techs WHERE GT_Email='" + req.params.email + "'",
                (err, rows) => {
                    if(err){
                        
                    } else {
                        res.status(200).json(rows);
                    }
                }
            );
        }
    };

    techsController.addTech = async (req, res) => {
        if(connection){
            await connection.query(
                "INSERT INTO gps_techs (GT_Email, GT_Name, GT_Password, GT_Lat, GT_Lng, GT_Active) VALUES('" + req.body.email + "', '" + req.body.name + "', '" + req.body.password + "', " + req.body.lat + ", " + req.body.lng + ", " + req.body.active + ");",
                (err, rows) => {
                    if(err){
                        
                    } else {
                        res.status(200).json(rows);
                    }
                }
            );
        }
    };

    techsController.updateTech = async (req, res) => {
        if(connection){
            await connection.query(
                "UPDATE gps_techs SET GT_Lat=" + req.body.lat + ", GT_Lng=" + req.body.lng + ", GT_Distance='" + req.body.distance + "' WHERE GT_ID=" + req.body.id + ";",
                (err, rows) => {
                    if(err){
                       
                    } else {
                        res.status(200).json(rows);
                    }
                }
            );
        }
    };

    techsController.updateStatus = async (req, res) => {
        if(connection){
            await connection.query(
                "UPDATE gps_techs SET GT_Active=" + req.body.active + " WHERE GT_ID=" + req.body.id + "",
                (err, rows) => {
                    if(err){
                        
                    } else {
                        res.status(200).json(rows);
                    }
                }
            );
        }
    };

    techsController.updateImage = async (req, res) => {
        if(connection){
            await connection.query(
                "UPDATE gps_techs SET GT_Image='" + req.body.image + "' WHERE GT_ID=" + req.body.id + "",
                (err, rows) => {
                    if(err){
                       
                    } else {
                        res.status(200).json(rows);
                    }
                }
            );
        }
    };

    module.exports = techsController;
} catch (error) {
    
}