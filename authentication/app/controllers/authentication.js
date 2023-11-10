const { authenticate } = require("../services/authentication");

module.exports = {
  async login({ body }, response, next) {
    const token = await authenticate(body, response);
    response.status(200).json({ ...token });
  }
};