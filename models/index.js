const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const config = require('../config/config')
const db = {}

// const sequelize = new Sequelize(
//     config.db.database,
//     config.db.user,
//     config.db.password,
//     config.db.options
// )

const sequelize = new Sequelize(`postgres://${config.db.user}:${config.db.password}@${config.db.options.host}:5432/${config.db.database}`, {logging: false});

// fs
// .readdirSync(__dirname)
// .filter((file) =>
//     file !== 'index.js'
// )
// .forEach((file) => {
//     const model = sequelize.import(path.join(__dirname, file))
//     db[model.name] = model
// })

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db