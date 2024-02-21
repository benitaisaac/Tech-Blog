//import all models that we will work with 
const User = require('./User');
const Blogpost = require ('./blogPost');
const Comment = require('./Comment');

// .belongsTo associations -- 
Blogpost.belongsTo(User);

Comment.belongsTo(Blogpost);

Comment.belongsTo(User);

// .hasMany associations -- 

User.hasMany(Blogpost, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

User.hasMany(Comment, {
    foreignKey: 'user_id',
    //TODO: does this need a delete option? 
});

Blogpost.hasMany(Comment, {
    foreignKey: 'blogpost_id',
    //TODO: delete option? 
})

module.exports = { Blogpost, User, Comment};



