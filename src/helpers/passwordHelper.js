const bcrypt = require("bcrypt");
require("dotenv").config();

const passwordHelper = {
  hashPassword: async (password) => {
    const salt = process.env.SALT * 1;
    return bcrypt.hash(password, salt);
  },
  comparePassword: async (password, hash) => {
    return bcrypt.compare(password, hash);
  },
};

module.exports = passwordHelper;
