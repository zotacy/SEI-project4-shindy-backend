'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserCharacter extends Model {
    static associate(models) {
      // define association here
    }
  };
  UserCharacter.init({
    userId: DataTypes.INTEGER,
    characterId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'UserCharacter',
  });
  return UserCharacter;
};