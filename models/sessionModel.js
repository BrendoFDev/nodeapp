const { DataTypes } = require('sequelize');
const sequelize = require('./sequelize');

const Session = sequelize.define('Session', {
    sid: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    expires: DataTypes.DATE,
    data: DataTypes.TEXT,
  });

  module.exports = Session;