import mongoose from "mongoose";
const Schema = mongoose.Schema;

import { ingredientClasses } from "../src/lists/ingredientClasses";

const ingredientSchema = new Schema({
  name: {type: String, required: true},
  class: {type: String, required: true, enum: ingredientClasses},
  unitOfMeasurement: {type: String, required: true},
  servingSize: {type: Number, required: true, default: 1},
  packageSize: {type: Number, required: true, default: 1},
  packageCost: {type: Number, required: true, default: 0},
  costPerUnit: {type: Number, required: true, default: 0},
});

export default mongoose.model('Ingredient', ingredientSchema);