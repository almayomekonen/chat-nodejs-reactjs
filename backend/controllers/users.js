const { default: axios } = require("axios");

exports.authUsers = async (req, res, next) => {
  const { username } = req.body;
  try {
    const r = await axios.put(
      "https://api.chatengine.io/users/",
      { username: username, secret: username, first_name: username },
      { headers: { "private-key": "47a855b7-a7e4-4612-96f0-74957a547dd4 " } }
    );
    return res.status(r.status).json(r.data);
  } catch (err) {
    return res.status(err.response.status).json(err.response.data);
  }
};
