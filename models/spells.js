module.exports = function(sequelize, DataTypes) {
  const spell = sequelize.define("spells", {
    spellName: {
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
    spellType: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isIn: ["fire", "air"]
      }
    },
    dmgType: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
        max: 10
      }
    },
    specialeffects: {
      type: DataTypes.STRING,
      allowNull: true
    }
  });
  spell.associate = function(models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    spell.hasMany(models.character, {
      onDelete: "cascade"
    });
  };
  return spell;
};
