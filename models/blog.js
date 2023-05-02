const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');


class Blog extends Model {}
class BlogComments extends Model {}

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
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
    sequelize
    }
);

BlogComments.init(
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
                model: "user",
                key: "id"
            }
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
    sequelize
    }
);



module.exports = {
    Blog,
    BlogComments 
}