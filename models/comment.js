const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model{}

Comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        comment: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        blogID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
            model: "blog",
            key: "id"
            }
        }
    },
    {
        sequelize,
      }
)

module.exports = Comment;