const ValidationError = require("./classes/ValidationError");
const AuthenticationError = require("./classes/AuthenticationError");
const InternalServerError = require("./classes/InternalServerError");

const ErrorConstructorsEnum = {
  VALIDATION_ERROR: ValidationError,
  AUTHENTICATION_ERROR:  AuthenticationError,
  INTERNAL_ERROR: InternalServerError,
  // ...

  /**
   * Check if the error is an instance of a custom error class
   * @param error {Error} - The error to check
   * @returns {boolean} - True if the error is an instance of a custom error class, false otherwise
   */
  isCustomError: function (error) {
    return Object.values(this)
      .some(errorType => error instanceof errorType);
  }
}

module.exports = ErrorConstructorsEnum;
