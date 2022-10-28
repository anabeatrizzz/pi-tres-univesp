const sequelize = require("sequelize");

const connectionData = {
    bd: "admin_cct20pi3unvp",
    user: "admin_pi",
    password: "1q2w3e",
    host: "clovisgarcia.com.br"
}

const connection = new sequelize(connectionData.bd, connectionData.user, connectionData.password,{
    host: connectionData.host,
    dialect:'mysql',
    timezone:"-03:00"
});

module.exports = connection;