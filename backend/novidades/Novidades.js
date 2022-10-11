const Sequelize = require("sequelize");
const connection = require("../database/database");

const Novidades = connection.define('novidades',{
    titulo:{
        type:Sequelize.STRING,
        allowNull:false
    }, descricao:{
        type: Sequelize.STRING,
        allowNull:false
    }
})

Novidades.sync({force:false})
module.exports = Novidades;