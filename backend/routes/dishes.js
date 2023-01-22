const express = require("express");
const {
    getDishes,
    getDish,
    postDish,
    patchDish,
    deleteDish,
  } = require('../controllers/dishControllers')


const router = express.Router();

// get all dishes
router.get('/',getDishes)

// get single dish
router.get('/:id',getDish)

// create new dish
router.post('/',postDish)

// update dish
router.patch('/:id',patchDish)

// delete dish
router.delete('/:id',deleteDish)

module.exports = router;
