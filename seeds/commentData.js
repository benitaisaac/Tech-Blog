const {Comment} = require('../models');
const commentData = [
    {content: "Great breakdown! Excited to implement PWAs for my business and enhance user experience across devices.", user_id: 1, blogpost_id: 1},
    {content: "Blockchain's potential is mind-blowing! Can't wait to see how it revolutionizes different industries.", user_id: 2, blogpost_id: 2},
    {content: "AI's impact on healthcare is truly remarkable. It's amazing to see technology improving patient care!", user_id: 3, blogpost_id: 3},
    {content: "Cybersecurity is crucial nowadays. Thanks for the tips, staying safe online is everyone's responsibility.", user_id: 4, blogpost_id: 4},
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;

