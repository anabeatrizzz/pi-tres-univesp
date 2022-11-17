const Sequelize = require("sequelize");
const connection = require("../database/database");

const Classe = connection.define('classe',{
    nome:{
        type:Sequelize.STRING,
        allowNull:false
    }, descricao:{
        type: Sequelize.STRING,
        allowNull:false
    }
})

Classe.sync({force:false});
module.exports = Classe;