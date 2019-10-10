module.exports = function(sequelize, DataTypes) {
  const character = sequelize.define("character", {
    userid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    characterName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    str: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
        max: 30
      }
    },
    dex: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
        max: 30
      }
    },
    con: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
        max: 30
      }
    },
    int: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
        max: 30
      }
    },
    wis: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
        max: 30
      }
    },
    char: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
        max: 30
      }
    },
    equipment: {
      type: DataTypes.JSON,
      allowNull: true
    },
    skill: {
      type: DataTypes.JSON,
      allowNull: false
    }
  });
  character.associate = function(models) {
    character.belongsTo(models.armor, {
      foreignKey: {
        allowNull: false
      }
    });
    character.belongsTo(models.user, {
      foreignKey: {
        allowNull: false
      }
    });
    character.belongsTo(models.weapon, {
      foreignKey: {
        allowNull: false
      }
    });
    character.belongsTo(models.spells, {
      foreignKey: {
        allowNull: false
      }
    });
    character.belongsTo(models.race, {
      foreignKey: {
        allowNull: false
      }
    });
    character.belongsTo(models.classes, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return character;
};
