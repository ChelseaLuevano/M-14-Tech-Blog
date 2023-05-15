const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');


class Blog extends Model {}
class BlogComment extends Model {}

Blog.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        contents: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        userID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "User",
                key: "id"
            }
        }
    },
    {
    sequelize,
    freezeTableName: true,
    }
);

BlogComment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        contents: {
            type: DataTypes.TEXT,
            allowNull: false,
            valdiate: {
                len: [1],
            }
        },
        userID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "User",
                key: "id"
            }
        },
        blogID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "Blog",
                key: "id"
            }
        }
    },
    {
    sequelize, 
    freezeTableName: true,
    }
);



module.exports = {
    Blog,
    BlogComment 
}