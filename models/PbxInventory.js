const mongoose = require('mongoose');

const PbxProduct = new mongoose.Schema({

    client: {
        type: String,
        required: true
    },
    product: {
        type: String,
        required: true,   
    },
    company: {
        type: String,
        required: true
    },
    date: {

        type: Date,
        required: true,
        default: Date.now
    }

});

module.exports = new mongoose.model('PbxProcInv', PbxProduct);