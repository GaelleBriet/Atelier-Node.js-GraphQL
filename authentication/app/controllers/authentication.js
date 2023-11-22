const { authenticate } = require("../services/authentication");

module.exports = {
  async login({ body }, response, _) {
    const token = await authenticate(body);
    response.status(200).json({ ...token });
  }
};
