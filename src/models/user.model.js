const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const JWTPRIVATEKEY = process.env.JWTPRIVATEKEY;

const userSchema = new mongoose.Schema({
  Name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  country: { type: String, required: true },
});

userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, JWTPRIVATEKEY, {
    expiresIn: "7d",
  });
  return token;
};

const User = mongoose.model("user", userSchema);

module.exports = { User };
