const fs = require("fs");
const path = require("path");

fs.cpSync(
  path.resolve(__dirname, "../../public"),
  path.resolve(__dirname, "../../build"),
  { recursive: true }
);
