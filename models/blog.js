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
    sequelize
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
                model: "Blogs",
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
    BlogComment 
}