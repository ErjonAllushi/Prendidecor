const mongoose = require("mongoose")

const itemSchema = new mongoose.Schema({
    itemName: {
        type: String,
        require: true,
        trim: true
    },
    itemDesc: {
        type: String,
        require: true,
        trim: true
    },
    image:String
})

const Items = mongoose.model("Items", itemSchema)
module.exports = Items