module.exports = function(sequelize, DataTypes) {
  const race = sequelize.define("race", {
    raceName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    abilityOne: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
        max: 6
      }
    },
    abilityTwo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
        min: 1,
        max: 6
      }
    },
    abilityModOne: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
        max: 6
      }
    },
    abilityModTwo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
        min: 1,
        max: 6
      }
    },
    size: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
        isIn: {
          args: ["s", "m", "l"]
        }
      }
    },
    speed: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    language: {
      type: DataTypes.JSON,
      allowNull: true
    },
    specialTraits: {
      type: DataTypes.STRING,
      allowNull: true
    }
  });
  race.associate = function(models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    race.hasMany(models.character, {
      onDelete: "cascade"
    });
  };
  return race;
};
