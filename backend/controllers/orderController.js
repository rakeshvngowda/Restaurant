// dish Models require
const Order = require("../models/ordersModel");


// get carts
const getOrderDishes = async (req, res) => {
    try {
      const dish = await Order.find({})
      res.status(200).json({ dish });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: error.message });
    }
};

// get single cart
const getOrderDish = async (req, res) => {
    const { id } = req.params;
    try {
      const dish = await Order.findById(id);
      res.status(201).json({ dish });
    } catch (error) {
      console.log(error);
      res.status(400).json({ error: error.message });
    }
};


// post cart
const postOrderDish = async (req, res) => {
  const { name, price,email } = req.body;
  try {
    const dish = await Order.create({ name, price,email });
    res.status(201).json({ dish });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

// patch cart
const patchOrderDish = async (req, res) => {
    const { id } = req.params;
    try {
      const dish = await Order.findByIdAndUpdate(id,{...req.body});
      res.status(201).json({ dish });
    } catch (error) {
      console.log(error);
      res.status(401).json({ error: error.message });
    }
};

// delete cart
const deleteOrderDish = async (req, res) => {
    const { id } = req.params;
    try {
      const dish = await Order.findByIdAndDelete(id);
      res.status(200).json({ dish });
    } catch (error) {
      console.log(error);
      res.status(401).json({ error: error.message });
    }
};

module.exports = {
  getOrderDishes,
  getOrderDish,
  postOrderDish,
  patchOrderDish,
  deleteOrderDish,
};
