import mongoose from "mongoose";
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  name: {type: String, required: true},
  ingredients: [{
    ingredient: {type: Schema.Types.ObjectId, ref: 'Ingredient'},
    qty: Number,
    cost: Number,
  }],
  totalPrice: {type: Number, required: true}
});

export default mongoose.model('Item', itemSchema);