const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const orderScema = new Schema(
  {
    name: {
        required:true,
        type:String}, 
    order: {
        required:true,
       type: String},
       amount: {
        required:true,
       type: String},

  
  },
  { timestamps: true }
);



module.exports = mongoose.model("Order", orderScema);

