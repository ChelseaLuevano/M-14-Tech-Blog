const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class userComment extends Model{}

Comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        }
    },
    {
        sequelize,
      }
)

module.exports = userComment;