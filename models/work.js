module.exports = function(sequelize, DataTypes) {
  var Work = sequelize.define("Work", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1]
    },
    siteLink: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1]
    },
    codeLink: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1]
    }
  });
  return Work;
};
