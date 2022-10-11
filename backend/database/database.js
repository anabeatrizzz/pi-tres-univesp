const sequelize = require("sequelize");

const connection = new sequelize('cct20pi3unvp','root','1234',{
    host:'localhost',
    dialect:'mysql',
    timezone:"-03:00"
});

module.exports = connection;