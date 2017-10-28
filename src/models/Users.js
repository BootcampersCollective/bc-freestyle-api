import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const User = new Schema({
  name: String,
  email: String,
  phone: String,
  password: String,
  location: {
    lat: String,
    lon: String,
    address: String
  },
  description: String,
});

export default User;
