
const mongoose = require("mongoose");

const connect = () => {
  return mongoose.connect(
    "mongodb+srv://admin:12345@cluster0.xnldl.mongodb.net/EcommerceDB"
  );
};

module.exports = connect;
