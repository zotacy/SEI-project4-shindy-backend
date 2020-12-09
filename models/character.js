'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Character extends Model {
    static associate(models) {
      Character.belongsTo(models.User, { //Sperate for inital & primary?
        through: "UserCharacter",
        foreignKey: "characterId",
        otherKey: "userId",
      });
    }
  };
  Character.init({
    name: DataTypes.STRING,
    hp: DataTypes.INTEGER,
    attack: DataTypes.INTEGER,
    defense: DataTypes.INTEGER,
    recover: DataTypes.INTEGER,
    spd: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Character',
  });
  return Character;
};