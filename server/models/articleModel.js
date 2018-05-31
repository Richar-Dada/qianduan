var { sequelize, DataTypes } = require('sequelize')
var db = require('./../util/db')

var Article = db.define('articles', {
  title: DataTypes.STRING,
  author: {
    type: DataTypes.STRING
  },
  source: {
    type: DataTypes.STRING
  },
  tags: {
    type: DataTypes.STRING
  },
  content: {
    type: DataTypes.STRING
  }
}, {
  freezeTableName: false
})

Article.sync({ force: false })

module.exports = Article