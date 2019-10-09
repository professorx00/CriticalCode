module.exports = function(sequelize, DataTypes) {
  const armor = sequelize.define("armor", {
    armorName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    AC: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 6,
        max: 12
      }
    },
    armorType: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        isIn: ["leather", "chain", "plate", "full-plate", "cloth"]
      }
    }
  });
  return armor;
};