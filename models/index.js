const User = require('./user');
const Comment = require('./comment');
const Blog = require('/.blog');
const userComment = require('./userComment');

// Users can post many comments
User.belongsToMany(Comments, {
    through: {
        model: userComment,
        unique: false
    }, 
    as: 'user_comments'
})




module.exports = { User, Comment, Blog, userComment };
