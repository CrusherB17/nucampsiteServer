const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;


const promotionSchema = new Schema({
  "name": {
    type: String,
    unique: true,
    required: true
  },
  "image": {
    type: String,
    required: true
  },
  "featured": {
    type: Boolean,
    required: false
  },
  "cost": {
    type: Currency,
    required: true,
    min: 0
  },
  "description": {
    type: String,
    required: true
  }
},
  {
    timestamps: true
  }
)

const Promotion = mongoose.model('Promotion', promotionSchema)

module.exports = Promotion;