try {
    let aperturesController = {};

    aperturesController.getApertures = async (req, res) => {
        if(connection){
            await connection.query(
                'SELECT * FROM cars_apertures ORDER BY Name',
                (err, rows) => { 
                    if(err){
                        
                    } else { 
                        res.status(200).json(rows);
                    }
                }
            );
        }
    };

    aperturesController.getApertureByID = async (req, res) => {
        if(connection){
            await connection.query(
                "SELECT * FROM cars_apertures WHERE Aperture_ID='" + req.params.id + "'",
                (err, rows) => {
                    if(err){
                        
                    } else {
                        res.status(200).json(rows);
                    }
                }
            );
        }
    };

    aperturesController.addAperture = async (req, res) => {
        if(connection){
            await connection.query(
                "INSERT INTO cars_apertures (Aperture_ID, Name, Price) VALUES ('"+req.body.apertureid+"', '"+req.body.name+"', '"+req.body.price+"');",
                (err, rows) => { 
                    if(err){
                        
                    } else { 
                        res.status(200).json(rows);
                    }
                }
            );
        }
    };

    aperturesController.updateAperture = async (req, res) => {
        if(connection){
            await connection.query(
                "UPDATE cars_apertures SET Name='"+req.body.name+"', Price='"+req.body.price+"' WHERE Aperture_ID='"+req.body.apertureid+"';",
                (err, rows) => { 
                    if(err){
                        
                    } else { 
                        res.status(200).json(rows);
                    }
                }
            );
        }
    };

    module.exports = aperturesController;
} catch (error) {
    
}