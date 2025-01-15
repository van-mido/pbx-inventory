const express = require('express');
const router = express.Router();

const { 
            getAllInventory,
            getSingleInventory,
            createNewProduct,
            updateProductInventory,
            deleteProductInventory

        } = require('../controllers/pbxInventory');

// General request
router.route('/').get(getAllInventory).post(createNewProduct);

// Request by id
router.route('/:id').get(getSingleInventory).put(updateProductInventory).delete(deleteProductInventory);

module.exports = router;


