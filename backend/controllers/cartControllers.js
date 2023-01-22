// dish Models require
const Cart = require("../models/cartModel");


// get carts
const getCartDishes = async (req, res) => {
    try {
      const dish = await Cart.find({})
      res.status(200).json({ dish });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: error.message });
    }
};

// get single cart
const getCartDish = async (req, res) => {
    const { id } = req.params;
    try {
      const dish = await Cart.findById(id);
      res.status(201).json({ dish });
    } catch (error) {
      console.log(error);
      res.status(400).json({ error: error.message });
    }
};


// post cart
const postCartDish = async (req, res) => {
  const { name, price,email } = req.body;
  try {
    const dish = await Cart.create({ name, price,email });
    res.status(201).json({ dish });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

// patch cart
const patchCartDish = async (req, res) => {
    const { id } = req.params;
    try {
      const dish = await Cart.findByIdAndUpdate(id,{...req.body});
      res.status(201).json({ dish });
    } catch (error) {
      console.log(error);
      res.status(401).json({ error: error.message });
    }
};

// delete cart
const deleteCartDish = async (req, res) => {
    const { id } = req.params;
    try {
      const dish = await Cart.findByIdAndDelete(id);
      res.status(200).json({ dish });
    } catch (error) {
      console.log(error);
      res.status(401).json({ error: error.message });
    }
};

module.exports = {
  getCartDishes,
  getCartDish,
  postCartDish,
  patchCartDish,
  deleteCartDish,
};
