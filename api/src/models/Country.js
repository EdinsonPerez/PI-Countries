const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {
    id:  {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true,
      validate: {
        len: [3]
      }
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    flags: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    continent: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    capital: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    subregion: {
      type: DataTypes.STRING,
    },
    area: {
      type: DataTypes.INTEGER,
    },
    population: {
      type: DataTypes.INTEGER,
    }
  },
  {
    tableName: 'Country',
    timestamps: false
  }
);

// Country.associate = (models) => {
//   Country.belongsToMany(
//     models.Activity,
//     {
//       through: 'CountriesActivities',
//       timestamps: false
//    }
 //);
//}
};