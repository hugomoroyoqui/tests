try {
    let paymentinfoController = {};

    paymentinfoController.getInfo = async (req, res) => {
        if(connection){
            await connection.query(
                'SELECT * FROM payments_info',
                (err, rows) => {
                    if(err){
                        
                    } else {
                        res.status(200).json(rows);
                    }
                }
            );
        }
    };

    module.exports = paymentinfoController;
} catch (error) {
    
}