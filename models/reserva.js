'use strict';

module.exports = (sequelize, DataTypes) => {
  const Reserva = sequelize.define('Reserva', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    cliente_cpf: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    voo_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    aeronave_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    data: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    hora: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    assento: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
        max: 10,
      },
    },
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  }, {
    timestamps: true,
    indexes: [
        {
        unique: true,
        fields: ['aeronave_id', 'voo_id', 'assento'],
        },
    ],
  });

  return Reserva;
};
