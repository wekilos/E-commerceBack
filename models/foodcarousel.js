"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class FoodCarousel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  FoodCarousel.init(
    {
      img: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "FoodCarousel",
    }
  );
  return FoodCarousel;
};
