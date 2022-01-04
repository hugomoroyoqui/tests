try {
    let productOrdersController = {};

    productOrdersController.getNotifications = async (req, res) => {  
        if(connection){
            await connection.query(
                'SELECT * FROM product_orders_notification WHERE PON_Status=0',
                (err, rows) => {
                    if(err){
                        
                    } else {
                        res.status(200).json(rows);
                    }
                }
            );
        }
    };

    productOrdersController.addNotification = async (req, res) => {
        if(connection){
            await connection.query(
                "INSERT INTO product_orders_notification (PON_Status) VALUES("+req.body.PON_Status+");",
                (err, rows) => {
                    if(err){
                        
                    } else {
                        res.status(200).json(rows);
                    }
                }
            );
        }
    };

    productOrdersController.updateNotificationStatus = async (req, res) => {
        if(connection){
            await connection.query(
                "UPDATE product_orders_notification SET PON_Status=" + req.body.PON_Status + " WHERE PON_Status=0",
                (err, rows) => {
                    if(err){
                        
                    } else {
                        res.status(200).json(rows);
                    }
                }
            );
        }
    };

    module.exports = productOrdersController;
} catch (error) {
    
}