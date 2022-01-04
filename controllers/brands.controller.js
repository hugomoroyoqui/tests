try {
    let brandsController = {};

    brandsController.getBrands = async (req, res) => {
        if(connection){
            await connection.query(
                'SELECT * FROM cars_brands ORDER BY Name',
                (err, rows) => {
                    if(err){
                        
                    } else {
                        res.status(200).json(rows);
                    }
                }
            );
        }
    };

    brandsController.addBrand = async (req, res) => {
        if(connection){
            await connection.query(
                "INSERT INTO cars_brands (Brand_ID, Name) VALUES ('"+req.body.brandid+"', '"+req.body.name+"');",
                (err, rows) => {
                    if(err){
                        
                    } else {
                        res.status(200).json(rows);
                    }
                }
            );
        }
    };

    brandsController.deleteBrand = async (req, res) => {
        if(connection){
            await connection.query(
                "DELETE FROM cars_brands WHERE Brand_ID='"+req.body.brandid+"';",
                (err, rows) => {
                    if(err){
                        
                    } else {
                        res.status(200).json(rows);
                    }
                }
            );
        }
    };

    module.exports = brandsController;
} catch (error) {
    
}