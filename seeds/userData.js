const {User} = require ('../models');
const userData = [
    {userName: "Bailey Hayes", password: "password" },
    {userName: "Emily Johnson", password: "password" },
    {userName: "Michael Brown", password: "password" },
    {userName: "Sarah Davis", password: "password" },
    {userName: "David Wilson", password: "password" },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;