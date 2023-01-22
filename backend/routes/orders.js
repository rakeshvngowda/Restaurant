const {
    getOrderDishes,
    getOrderDish,
    postOrderDish,
    patchOrderDish,
    deleteOrderDish,
  } = require("../controllers/orderController");
  
  const express = require("express");
  
  const router = express.Router();
  
  // get all dishes
  router.get("/", getOrderDishes);
  
  // get single dish
  router.get("/:id", getOrderDish);
  
  // create new dish
  router.post("/", postOrderDish);
  
  // update dish
  router.patch("/:id", patchOrderDish);
  
  // delete dish
  router.delete("/:id", deleteOrderDish);
  
  module.exports = router;
  