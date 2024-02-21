const {Blogpost} = require ('../models');
const blogPostData = [
    {title: "CSS frameworks", content: "you can use bootstrap", user_id: 1 },
    {title: "how to use HTML", content: "text here", user_id: 2 },
    {title: "sample title 3", content: "sample content 3", user_id: 3 },
    {title: "sample title 4", content: "sample content 4", user_id: 4 },
    {title: "sample title 5", content: "sample content 5", user_id: 5 },
];

const seedBlogPost = () => Blogpost.bulkCreate(blogPostData);

module.exports = seedBlogPost;