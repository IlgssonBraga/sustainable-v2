const { hashSync } = require("bcryptjs");

const a = hashSync("123", 8);

console.log(a);
