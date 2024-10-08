const mongoose = require('mongoose');
const schema = mongoose.Schema;

const formSchema = new schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    }
},{
    timestamps : true
})

const form = mongoose.model('FormData', formSchema);

module.exports = form;



