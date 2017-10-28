import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
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

const User = mongoose.model('UserModel', UserSchema);

export default User;
