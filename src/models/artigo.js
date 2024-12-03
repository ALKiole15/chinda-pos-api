'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Artigo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Artigo.init({
    Artigo: DataTypes.STRING,
    Descricao: DataTypes.STRING,
    Familia: DataTypes.STRING,
    Subfamilia: DataTypes.STRING,
    Unidate: DataTypes.STRING,
    PCM: DataTypes.FLOAT,
    STKMIN: DataTypes.FLOAT

  }, 
  {
    sequelize,
    modelName: 'Artigo',
    tableName: 'Artigos'
  });

  sequelize.sync()
  .then(() => {
    console.log('artigo table has been created.');
  })
  .catch((error) => {
    console.error('Error creating table:', error);
  });

  return Artigo;
};