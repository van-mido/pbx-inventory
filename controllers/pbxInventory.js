const PbxProcInv = require('../models/PbxInventory');

// Method GET
// Get all rows
const getAllInventory = async (req, res) => {

   try {

        const getProducts = await PbxProcInv.find();
        res.status(200).json(getProducts);

   } catch (error) {
   
        res.status(400).json({ error: error.message });
   }
    
}

// Method GET
// Get a single row
const getSingleInventory = async (req, res) => {
    
    try {
   
        const getProduct = await PbxProcInv.findById(req.params.id);
        res.status(200).json({ success: true, data: getProduct });

    } catch (error) {
    
        res.status(400).json({ error: error.message });
    }
}

// Method POST
// Create new register
const createNewProduct = async (req, res) => {

    try {
        // const { client, product, company } = req.body;
        
        const createProduct = await PbxProcInv.create({ client: req.body.client, product: req.body.product, company: req.body.company });
        res.status(201).json({ success: true, data: createProduct});

        
    } catch (error) {
        
        res.status(400).json({ error: error.message });
    }
}

// Method PUT
// Update product method
const updateProductInventory = async (req, res) => {

        try {

            const getId = await PbxProcInv.findById(req.params.id);
           
            // console.log(getId);
            // const upProduct = new PbxProcInv({
            //     client: req.body.client,
            //     product: req.body.product,
            //     company: req.body.company
            // });

            const upProduct = await PbxProcInv.findByIdAndUpdate(getId.id, req.body);

            if (!upProduct) {

                return res.status(404).json({ msg: `File not updated` });
            }

            res.status(201).json({ success: true, data: upProduct });

        } catch (error) {


           res.status(500).json({ msg: 'Please introduce the id product' });
        }
       
        
}

// Method DELETE
// Delete product
const deleteProductInventory = async (req, res) => {

    try {

        const getId = await PbxProcInv.findById(req.params.id);

        // console.log(getId);
        const delProduct = await getId.deleteOne();

        if (!delProduct) {

            return res.status(404).json({ msg: "Product Not found"});
        }

        res.status(200).json({ msg: 'Product deleted' });

    } catch (error) {

        res.status(500).json({ msg: 'Product deleted' });

    }
}

module.exports = { 
                    getAllInventory,
                    getSingleInventory,
                    createNewProduct,
                    updateProductInventory,
                    deleteProductInventory
}