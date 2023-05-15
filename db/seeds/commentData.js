const { Comment } = require('../../models')

const commentData = [
    {
        id: 1,
        title: "ChatGPT Rules",
        contents: "I am very impressed with how conversational ChatGPT's responses are!",
        userID: 2,
        blogID: 1
    }
];

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;