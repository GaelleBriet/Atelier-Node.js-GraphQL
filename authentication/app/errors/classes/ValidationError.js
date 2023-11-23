const CustomAbstractError = require("./CustomAbstractError");

class ValidationError extends CustomAbstractError {
  constructor(message = "Error while validating.") {
    super("ValidationError", 400, message);
  }
}

module.exports = ValidationError;
