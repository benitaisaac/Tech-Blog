const { Blogpost } = require("../models");
const blogPostData = [
  {
    title: "Unlocking the Power of Progressive Web Apps: A Comprehensive Guide",
    content:
      "Progressive Web Apps (PWAs) combine the best of web and mobile experiences, offering offline functionality and push notifications for seamless user engagement.",

    user_id: 1,
  },
  {
    title:
      "Demystifying Blockchain: Understanding Its Potential Beyond Cryptocurrency",
    content:
      "Blockchain technology extends beyond finance, transforming supply chains, voting systems, and digital identities with its immutable, decentralized ledger.",
    user_id: 2,
  },
  {
    title: "The Rise of AI in Healthcare: Revolutionizing Patient Care",
    content:
      "AI applications in healthcare range from diagnosis assistance to personalized treatment plans, enhancing efficiency and improving patient outcomes.",
    user_id: 3,
  },
  {
    title:
      "Mastering Cybersecurity: Essential Tips for Protecting Your Digital Identity",
    content:
      "Protecting your digital identity involves using strong passwords, enabling two-factor authentication, and staying vigilant against phishing attacks and data breaches.",
    user_id: 4,
  },
  {
    title:
      "The Future of Work: Exploring Remote Collaboration Tools and Trends",
    content:
      "Remote collaboration tools like Slack, Zoom, and Trello facilitate communication and project management, enabling teams to work efficiently from anywhere.",
    user_id: 5,
  },
];

const seedBlogPost = () => Blogpost.bulkCreate(blogPostData);

module.exports = seedBlogPost;
