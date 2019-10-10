module.exports = function(sequelize, DataTypes) {
  const weapon = sequelize.define("weapon", {
    weaponName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    dmgDice: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 6,
        max: 12
      }
    },
    numberOfDice: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
        max: 40
      }
    },
    weaponType: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isIn: ["Melee", "Ranged"]
      }
    },
    dmgType: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
        max: 10
      }
    }
  });
  return weapon;
};
