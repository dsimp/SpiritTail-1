if (process.NODE_ENV === "production") {
  module.exports = require("./drinkStore.prod");
} else {
  module.exports = require("./drinkStore.dev");
}
