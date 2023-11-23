const CustomAbstractError = require("./CustomAbstractError");

class InternalServerError extends CustomAbstractError {
  constructor(message = "Internal server error.") {
    super("InternalServerError", 500, message);
  }
}

module.exports = InternalServerError;
