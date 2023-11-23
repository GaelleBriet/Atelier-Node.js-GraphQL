const ErrorTypes = require("./error-constructors.enum");

function errorHandlerMiddleware(err, req, res, _) {
  console.error(err.stack);

  if (ErrorTypes.isCustomError(err)) {
    res.status(err.status).json({
      type: err.name,
      message: err.message,
    });
  } else {
    res.status(500).json({
      type: ErrorTypes.INTERNAL_ERROR.name,
      message: 'An internal error occurred.',
    });
  }
}

module.exports = errorHandlerMiddleware;
