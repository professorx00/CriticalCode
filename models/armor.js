module.exports = function (sequelize, DataTypes) {
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
      validate: {
        isIn: ["Light", "Medium", "Heavy"]
      }
    },
    armorName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isIn: ["Padded", "Leather", "Studded Leather", "Hide", "Chain Shirt", "Scale Mail", "Breastplate", "Half Plate", "Ring Mail", "Chain Mail", "Splint", "Plate"]
      }
    }
  });
  armor.associate = function (models) {
    armor.hasMany(models.character, {
      onDelete: "cascade"
    });
  };
  return armor;
};
