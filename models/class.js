module.exports = function(sequelize, DataTypes) {
  const classes = sequelize.define("classes", {
    className: {
      type: DataTypes.STRING,
      allowNull: false
    },
    hitdice: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 6,
        max: 12
      }
    },
    primaryStatID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
        max: 6
      }
    },
    primarySaveID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
        max: 6
      }
    },
    secondarySaveID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
        max: 6
      }
    },
    allowArmorType: {
      type: DataTypes.JSON,
      allowNull: true
    },
    allowWeaponsType: {
      type: DataTypes.JSON,
      allowNull: true
    },
    cantrips: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
        max: 99
      }
    },
    spellLvlOne: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
        max: 99
      }
    },
    spellLvlTwo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
        max: 99
      }
    },
    spellLvlThree: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
        max: 99
      }
    },
    spellLvlFour: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
        max: 99
      }
    },
    spellLvlFive: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
        max: 99
      }
    },
    spellLvlSix: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
        max: 99
      }
    },
    spellLvlSeven: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
        max: 99
      }
    },
    spellLvlEight: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
        max: 99
      }
    },
    spellLvlNine: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
        max: 99
      }
    },
    startingWealth: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 2,
        max: 6
      }
    }
  });
  classes.associate = function(models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    classes.hasMany(models.character, {
      onDelete: "cascade"
    });
  };

  return classes;
};
