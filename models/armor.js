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
    dexMod: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 0,
        max: 4
      }
    },
    armorType: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isIn: ["Light", "Medium", "Heavy", "Shield"]
      }
    },
    armorName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isIn: ["Padded", "Leather", "Studded Leather", "Hide", "Chain Shirt", "Scale Mail", "Breastplate", "Half Plate", "Ring Mail", "Chain Mail", "Splint", "Plate", "Shield"]
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
