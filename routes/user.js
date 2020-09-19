const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../controller/user");

//Invoked middleware.
const advanceResults = require("../middleware/advanceResults");
const { protect, permission } = require("../middleware/auth");

//User model
const User = require("../models/User");

const router = require("express").Router();

router.use(protect);
router.use(permission("admin"));

router.route("/").get(advanceResults(User), getUsers).post(createUser);

router.route("/:id").get(getUser).put(updateUser).delete(deleteUser);

module.exports = router;
