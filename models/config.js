"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Config extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Config.init(
    {
      phone_number: DataTypes.STRING,
      start_time: DataTypes.STRING,
      end_time: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Config",
    }
  );
  return Config;
};
