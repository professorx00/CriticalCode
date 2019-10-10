module.exports = function(sequelize, DataTypes) {
  const user = sequelize.define("user", {
    userName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    firebaseID: {
      type: DataTypes.INTEGER,
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
