module.exports = function(sequelize, DataTypes) {
  const character = sequelize.define("character", {
    characterName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    str: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    dex: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    con: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    int: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    wis: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    char: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    equipment: {
      type: DataTypes.JSON,
      allowNull: true
    },
    skill: {
      type: DataTypes.JSON,
      allowNull: false
    },
    spells: {
      type: DataTypes.JSON,
      allowNull: false
    },
    gold: {
      type: DataTypes.INTEGER,
      default: 0,
      valdiate: {
        min: 0
      }
    },
    copper: {
      type: DataTypes.INTEGER,
      default: 0,
      valdiate: {
        min: 0
      }
    },
    electrum: {
      type: DataTypes.INTEGER,
      default: 0,
      valdiate: {
        min: 0
      }
    },
    silver: {
      type: DataTypes.INTEGER,
      default: 0,
      valdiate: {
        min: 0
      }
    },
    platinum: {
      type: DataTypes.INTEGER,
      default: 0,
      valdiate: {
        min: 0
      }
    },
    experience: {
      type: DataTypes.INTEGER,
      default: 0,
      validiate: {
        min: 0
      }
    },
    faction: {
      type: DataTypes.STRING
    },
    alignment: {
      type: DataTypes.STRING,
      allowNull: false
    },
    bonusLanguage: {
      type: DataTypes.JSON,
      allowNull: true
    },
    background: {
      type: DataTypes.STRING
    },
    strAdditional: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    dexAdditional: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    conAdditional: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    intAdditional: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    wisAdditional: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    charAdditional: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    inspiration: {
      type: DataTypes.STRING
    },
    acrobatics: {
      type: DataTypes.INTEGER,
      default: 0
    },
    animalHandling: {
      type: DataTypes.INTEGER,
      default: 0
    },
    arcana: {
      type: DataTypes.INTEGER,
      default: 0
    },
    athletics: {
      type: DataTypes.INTEGER,
      default: 0
    },
    deception: {
      type: DataTypes.INTEGER,
      default: 0
    },
    history: {
      type: DataTypes.INTEGER,
      default: 0
    },
    insight: {
      type: DataTypes.INTEGER,
      default: 0
    },
    intimidation: {
      type: DataTypes.INTEGER,
      default: 0
    },
    investigation: {
      type: DataTypes.INTEGER,
      default: 0
    },
    medicine: {
      type: DataTypes.INTEGER,
      default: 0
    },
    nature: {
      type: DataTypes.INTEGER,
      default: 0
    },
    perception: {
      type: DataTypes.INTEGER,
      default: 0
    },
    performance: {
      type: DataTypes.INTEGER,
      default: 0
    },
    religion: {
      type: DataTypes.INTEGER,
      default: 0
    },
    sleightofHand: {
      type: DataTypes.INTEGER,
      default: 0
    },
    stealth: {
      type: DataTypes.INTEGER,
      default: 0
    },
    survival: {
      type: DataTypes.INTEGER,
      default: 0
    },
    imgURL: {
      type: DataTypes.STRING,
      default: "/assets/images/default.png"
    }
    //add wealth,add all the skills
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
