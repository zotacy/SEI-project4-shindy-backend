const express = require("express");
const router = express.Router();

const UserModel = require("../models").User;
const CharacterModel = require("../models").Character;

// GET CHARACTER INFO
router.get("/:id", async (req, res) => {
  let character = await CharacterModel.findByPk(req.params.id, {
    include: [{ model: UserModel, attributes: ["id", "username"] }],
  });
  res.json({ character });
});

// GET ALL PLAYER CHARACTERS ---------- add to specific players??????
router.get("/", async (req, res) => {
  let allCharacters = await CharacterModel.findAll();
  res.json({ allCharacters });
});

// CREATE A NEW CHARACTER
router.post("/", async (req, res) => {
  console.log(req)
  let newCharacter = await CharacterModel.create(req.body);
  res.json({ newCharacter });
});

// UPDATE A CHARACTER
router.put("/:id", async (req, res) => {
  let updatedCharacter = await CharacterModel.update(req.body, {
    where: { id: req.params.id },
    returning: true,
  });
  let Character = await CharacterModel.findByPk(req.params.id)
  res.json({ Character });
});

// DELETE A CHARACTER
router.delete("/:id", async (req, res) => {
  await CharacterModel.destroy({
    where: { id: req.params.id },
  });
  res.json({
    message: `Character with id ${req.params.id} was deleted`,
  });
});

module.exports = router;
