const {Comment} = require('../models');
const commentData = [
    {content: "sample content 1", user_id: 1, blogPost_id: 1},
    {content: "sample content 2", user_id: 2, blogPost_id: 2},
    {content: "sample content 3", user_id: 3, blogPost_id: 3},
    {content: "sample content 4", user_id: 4, blogPost_id: 4},
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;

