const User = require('./user');
const {Blog, BlogComment} = require('/.blog');

// Users can post many comments
User.hasMany(BlogComment, {
    foreignKey: "userID",
    onDelete: "CASCADE"
})

BlogComment.hasOne(User, {
    foreignKey: "userID"
})

Blog.hasOne(User, {
    foreignKey: "userID"
})

User.hasMany(Blog, {
    foreignKey: "userID",
    onDelete: "CASCADE"
})



module.exports = { User, Comment, Blog, userComment };
