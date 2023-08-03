import mongoose from "mongoose";
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  userId: {type: Schema.Types.ObjectId, ref: 'User'},
  name: String,
  date: {type: Date,default: Date.now },
  items: [{
    item: {type: Schema.Types.ObjectId, ref: 'Item'},
    qty: Number,
    customerNotes: [String]
  }],
  totalPrice: {type: Number, required: true}
});

export default mongoose.model('Order', orderSchema);