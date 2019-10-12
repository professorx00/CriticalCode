module.exports = function (sequelize, DataTypes) {
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
    profBonus: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    primaryStatID: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isIn: ['str', 'dex', 'con', 'int', 'wis', 'char']
      }
    },
    savingThrowProf1: {
      type: DataTypes.STRING,
      allowNull: true
    },
    savingThrowProf2: {
      type: DataTypes.STRING,
      allowNull: true
    },
    allowArmorType: {
      type: DataTypes.JSON,
      allowNull: true
    },
    allowWeaponsType: {
      type: DataTypes.JSON,
      allowNull: true
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
classes.associate = function (models) {
  classes.hasMany(models.character, {
    onDelete: "cascade"
  });
};

return classes;
};
