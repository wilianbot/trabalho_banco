const { DataTypes } = require('sequelize');
const sequelize = require('./index');   

const Reserva = sequelize.define('Reserva', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    cliente_cpf: {
        type: DataTypes.STRING,
        allowNull: false
    },
    voo_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    aeronave_id: {
        type: DataTypes.INTEGER,
        allowNull: false    
    },
    data: {
        type: DataTypes.DATE,
        allowNull: false
    },
    hora: {
        type: DataTypes.TIME,
        allowNull: false
    },
    assento: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            min: 1,
            max: 10
        }
    },
    status: {
        type: DataTypes.STRING,
        defaultValue: false
    }
}, {
    timestamps: true
});

modelus.exports = Reserva;