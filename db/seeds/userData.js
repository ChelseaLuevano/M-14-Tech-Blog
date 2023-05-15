const { User } = require ('../../models')

const userData =[
    {
        id: 1, 
        userName: "SamAltman",
        email: "SamAltman@gmail.com",
        password: "ChatGPTIsSmarterThanYou1",
    },
    {
        id: 2, 
        userName: "TimCook",
        email: "TimCook@gmail.com",
        password: "AppleIsTheBestFruitEye8",
    },
    {
        id: 3, 
        userName: "SatyaNadella",
        email: "SatyaNadellak@gmail.com",
        password: "VideoGamesRule10",
    }
];



const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;