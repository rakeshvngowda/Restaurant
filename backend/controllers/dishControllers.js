// dish Models require
const Dish = require("../models/dishModel");

const getDishes = async (req, res) => {
    try {
      const dish = await Dish.find({})
      res.status(200).json({ dish });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: error.message });
    }
};

const getDish = async (req, res) => {
    const { id } = req.params;
    try {
      const dish = await Dish.findById(id);
      res.status(201).json({ dish });
    } catch (error) {
      console.log(error);
      res.status(400).json({ error: error.message });
    }
};

const postDish = async (req, res) => {
  const { name, price } = req.body;
  try {
    const dish = await Dish.create({ name, price });
    res.status(201).json({ dish });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

const patchDish = async (req, res) => {
    const { id } = req.params;
    try {
      const dish = await Dish.findByIdAndUpdate(id,{...req.body});
      res.status(201).json({ dish });
    } catch (error) {
      console.log(error);
      res.status(401).json({ error: error.message });
    }
};


const deleteDish = async (req, res) => {
    const { id } = req.params;
    try {
      const dish = await Dish.findByIdAndDelete(id);
      res.status(200).json({ dish });
    } catch (error) {
      console.log(error);
      res.status(401).json({ error: error.message });
    }
};

module.exports = {
  getDishes,
  getDish,
  postDish,
  patchDish,
  deleteDish,
};
