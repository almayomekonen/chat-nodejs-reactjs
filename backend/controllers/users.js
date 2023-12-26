const { default: axios } = require("axios");
const User = require("../database/user");

exports.authUsers = async (req, res, next) => {
  const { username } = req.body;
  try {
    const r = await axios.put(
      "https://api.chatengine.io/users/",
      { username: username, secret: username, first_name: username },
      { headers: { "private-key": "7c8a7953-533a-4879-ae77-7fdcbf3e616f" } }
    );
    return res.status(r.status).json(r.data);
  } catch (err) {
    return res.status(err.response.status).json(err.response.data);
  }
};
