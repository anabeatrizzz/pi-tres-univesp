const sequelize = require("sequelize");

const remoteConnection = {
    bd: "admin_cct20pi3unvp",
    user: "admin_pi",
    password: "1q2w3e",
    host: "clovisgarcia.com.br"
}

const localConnection = {
    bd: "cct20pi3unvp",
    user: "root",
    password: "1234",
    host: "localhost"
}

const connection = new sequelize(remoteConnection.bd, remoteConnection.user, remoteConnection.password,{
    host: remoteConnection.host,
    dialect:'mysql',
    timezone:"-03:00"
});

module.exports = connection;