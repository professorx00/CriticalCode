module.exports = function(sequelize, DataTypes) {
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
    armorType: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isIn: ["leather", "chain", "plate", "full-plate", "cloth"]
      }
    }
  });
  armor.associate = function(models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    armor.hasMany(models.character, {
      onDelete: "cascade"
    });
  };
  return armor;
};
