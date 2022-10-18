const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
   
    name: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    summary: {
        type: String,
        required: true
    }
});

// we are creating a new collection
const Movieoverview=new mongoose.model("Movieoverview",movieSchema)

module.exports=Movieoverview;