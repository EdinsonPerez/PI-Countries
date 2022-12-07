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
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imagen_bandera: {
      type: DataTypes.STRING,
      allowNull: false
    },
    continente: {
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
      type: DataTypes.STRING,
    },
    poblacion: {
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