import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const GoodsSchema = new Schema({
  haves: Boolean,
  email :String,
  user : {
    type: Schema.Types.ObjectId,
    ref: 'user',
  },
  name :String,
  postDate: Date,
  categories: [],
  desc : String,
  qty: String,
  location:{
    lat: String,
    long: String,
    address: String,
  },
  img: "URL:String",
  pickUpDate: Date,
  expDate : Date,
  availTime: String
});

const Goods = mongoose.model('GoodsModel', GoodsSchema);

export default Goods;
