const sq = require('../../config/connection');
const seedBlog = require('./blogData');
const seedUser = require('./userData');
const seedComment = require('./commentData');

const blog = require('../../models/blog');
const user = require('../../models/user');



async function seedAll(){
    await sq.sync({force: true});

    await seedUser();
    console.log("seedUser data success");

    await seedBlog();
    console.log("seedBlog data success")

    await seedComment()
    console.log("seedComment data success")

    process.exit(0);
}

seedAll();