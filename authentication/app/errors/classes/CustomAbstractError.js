class CustomAbstractError extends Error {
  constructor(name, status, message) {
    super(message);
    this.name = name;
    this.status = status;
  }

}

module.exports = CustomAbstractError;
