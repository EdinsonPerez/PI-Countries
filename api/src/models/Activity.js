const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('activity', {
          name: {
             type: DataTypes.STRING,
             allowNull: false
          },
          description: {
             type: DataTypes.STRING,
             allowNull: false,
          },
          difficulty: {
             type: DataTypes.INTEGER,
             validate: {
                min: 1,
                max: 5
             }
          },
          duration: {
             type: DataTypes.FLOAT,
             validate: {
                min: 1,
                max: 48
             }
          },
          season: {
             type: DataTypes.ENUM('Verano', 'Otoño', 'Invierno', 'Primavera')
          },
         createdInDb: {
         type: DataTypes.BOOLEAN,
         allowNull: false,
         defaultValue: true,
       },
      },


       {
          tableName: 'Activity',
          timestamps: false
       }
    );
 
   //  Activity.associate = (models) => {
   //     Activity.belongsToMany(
   //        models.Country,
   //        {
   //           through: 'CountriesActivities',
   //           timestamps: false
   //      }
       //);
    //}
 }