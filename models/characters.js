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
    race: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    class: {
      type: DataTypes.INTEGER,
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
  return character;
};
