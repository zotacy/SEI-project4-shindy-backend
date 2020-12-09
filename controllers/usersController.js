const express = require("express");
const router = express.Router();

const UserModel = require("../models").User;

// GET USERS PROFILE
router.get("/profile/:id", async (req, res) => {
  let user = await UserModel.findByPk(req.params.id);
  res.json({ user });
});

module.exports = router;
