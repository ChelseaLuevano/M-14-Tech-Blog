const { Blog } = require ('../../models')

const blogData =[
    {
        title: "ChatGPT Best Use Cases",
        contents: "The OpenAI tool everyone is buzzing about, ChatGPT, is an amazing application for technologist to use. However there are a few things to be made aware off when using the tool. ChatGPT is still in research mode and can give incorrect information. It will have bias because it is created and managed by humans, whom are impossible to have no biases. The tool should be leverage for learning. Users should not ask the tool for opinion-based questions. ",
        userID: 1,
    },
    {
        title: "Handlebars vs. React",
        contents: "These frameworks both have value. ",
        userID: 1,
    }
];



const seedBlog = () => Blog.bulkCreate(blogData);

module.exports = seedBlog;