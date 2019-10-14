module.exports = function(sequelize, DataTypes) {
  const character = sequelize.define("character", {
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
      validate: {
        isIn: [
          "Lawful Good",
          "Neutral Good",
          "Chaotic Good",
          "Lawful Neutral",
          "Neutral",
          "Chaotic Neutral",
          "Lawful Evil",
          "Neutral Evil",
          "Chaotic Evil"
        ]
      }
    },
    bonusLanguage: {
      type: DataTypes.STRING
    },
    background: {
      type: DataTypes.STRING
    },
    strAdditional: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
        max: 30
      }
    },
    dexAdditional: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
        max: 30
      }
    },
    conAdditional: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
        max: 30
      }
    },
    intAdditional: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
        max: 30
      }
    },
    wisAdditional: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
        max: 30
      }
    },
    charAdditional: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
        max: 30
      }
    },
    inspiration: {
      type: DataTypes.STRING
    },
    acrobatics: {
      type: DataTypes.INTEGER,
      default: 0,
      validate: {
        min: -10,
        max: 30
      }
    },
    animalHandling: {
      type: DataTypes.INTEGER,
      default: 0,
      validate: {
        min: -10,
        max: 30
      }
    },
    arcana: {
      type: DataTypes.INTEGER,
      default: 0,
      validate: {
        min: -10,
        max: 30
      }
    },
    athletics: {
      type: DataTypes.INTEGER,
      default: 0,
      validate: {
        min: -10,
        max: 30
      }
    },
    deception: {
      type: DataTypes.INTEGER,
      default: 0,
      validate: {
        min: -10,
        max: 30
      }
    },
    history: {
      type: DataTypes.INTEGER,
      default: 0,
      validate: {
        min: -10,
        max: 30
      }
    },
    insight: {
      type: DataTypes.INTEGER,
      default: 0,
      validate: {
        min: -10,
        max: 30
      }
    },
    intimidation: {
      type: DataTypes.INTEGER,
      default: 0,
      validate: {
        min: -10,
        max: 30
      }
    },
    investigation: {
      type: DataTypes.INTEGER,
      default: 0,
      validate: {
        min: -10,
        max: 30
      }
    },
    medicine: {
      type: DataTypes.INTEGER,
      default: 0,
      validate: {
        min: -10,
        max: 30
      }
    },
    nature: {
      type: DataTypes.INTEGER,
      default: 0,
      validate: {
        min: -10,
        max: 30
      }
    },
    perception: {
      type: DataTypes.INTEGER,
      default: 0,
      validate: {
        min: -10,
        max: 30
      }
    },
    performance: {
      type: DataTypes.INTEGER,
      default: 0,
      validate: {
        min: -10,
        max: 30
      }
    },
    religion: {
      type: DataTypes.INTEGER,
      default: 0,
      validate: {
        min: -10,
        max: 30
      }
    },
    sleightofHand: {
      type: DataTypes.INTEGER,
      default: 0,
      validate: {
        min: -10,
        max: 30
      }
    },
    stealth: {
      type: DataTypes.INTEGER,
      default: 0,
      validate: {
        min: -10,
        max: 30
      }
    },
    survival: {
      type: DataTypes.INTEGER,
      default: 0,
      validate: {
        min: -10,
        max: 30
      }
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
