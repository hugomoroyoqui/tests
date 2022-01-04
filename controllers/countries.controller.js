try {
    let countriesController = {};

    countriesController.getCountries = async (req, res) => {  
        if(connection){
            await connection.query(
                "SELECT * FROM countries ORDER BY Count_Name;",
                (err, rows) => {
                    if(err){
                        
                    } else {
                        res.status(200).json(rows);
                    }
                }
            );
        }
    };
    
    countriesController.addCountry = async (req, res) => {
        if(connection){
            await connection.query(
                "INSERT INTO countries (Count_ID, Count_Name) values ('"+req.body.Count_ID+"', '"+req.body.Count_Name+"');",
                (err, rows) => {
                    if(err){
                        
                    } else {
                        res.status(200).json(rows);
                    }
                }
            );
        }
    };

    module.exports = countriesController;
} catch (error) {
    
}