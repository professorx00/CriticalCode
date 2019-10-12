module.exports = function(sequelize, DataTypes) {
  const user = sequelize.define("user", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      }
    }
  });
  user.associate = function(models) {
    user.hasMany(models.character, {
      onDelete: "cascade"
    });
  };
  return user;
};
