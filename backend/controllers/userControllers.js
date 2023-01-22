const loginPage = async (req, res) => {
  res.json({ msg: "login Page" });
};

const signupPage = async (req, res) => {
  res.json({ msg: "signup Page" });
};

module.exports = {
  loginPage,
  signupPage,
};
