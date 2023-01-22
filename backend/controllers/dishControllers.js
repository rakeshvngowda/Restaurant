const getDishes = async (req, res) => {
  res.json({ msg: "get all dishes" });
};
const getDish = async (req, res) => {
  res.json({ msg: "get single dish" });
};
const postDish = async (req, res) => {
  res.json({ msg: "create new dish" });
};
const patchDish = async (req, res) => {
  res.json({ msg: "update dish" });
};
const deleteDish = async (req, res) => {
  res.json({ msg: "delete dish" });
};

module.exports = {
  getDishes,
  getDish,
  postDish,
  patchDish,
  deleteDish,
};
