const sequelize = require('../config/connection');

//import all seeding functions
const seedUsers = require('./userData');
const seedBlogPost = require('./blogPostData');
const seedComments = require('./commentData');;

//define a new function to seed all data
const seedAll = async () => {
    await sequelize.sync({force: true});

    await seedUsers();

    await seedBlogPost();

    await seedComments();

    process.exit(0);
};

seedAll();

