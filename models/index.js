//import all models that we will work with
const User = require("./User");
const Blogpost = require("./blogPost");
const Comment = require("./Comment");

Blogpost.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

User.hasMany(Blogpost);

Blogpost.hasMany(Comment, {
  foreignKey: "blogpost_id",
  onDelete: "CASCADE",
});

Comment.belongsTo(User, {
  foreignKey: "user_id",
  targetKey: "id",
  as: "user",
  onDelete: "CASCADE",
});

module.exports = { Blogpost, User, Comment };
