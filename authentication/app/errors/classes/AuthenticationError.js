const CustomAbstractError = require("./CustomAbstractError");

class AuthenticationError extends CustomAbstractError {
  constructor(message = "Error while trying to log in.") {
    super("AuthenticationError", 500, message);
  }
}

module.exports = AuthenticationError;
