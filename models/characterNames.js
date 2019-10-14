module.exports = function(sequelize, DataTypes) {
  const characterName = sequelize.define("characterName", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  return characterName;
};
