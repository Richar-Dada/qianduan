var { sequelize, DataTypes } = require('sequelize')
var db = require('./../util/db')

var Tag = db.define('tags', {
  name: DataTypes.STRING,
}, {
  freezeTableName: false
})

Tag.sync({ force: false })

module.exports = Tag