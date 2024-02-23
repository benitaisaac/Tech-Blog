const router = require("express").Router();
const { User, Comment, Blogpost } = require("../models");
//TODO: add withAuth function

//Get all blogposts
router.get("/", async (req, res) => {
  try {
    const blogPostData = await Blogpost.findAll();
    res.status(200).json(blogPostData);
  } catch (err) {
    res.status(500).json(err);
  }
  //TODO: add code to render data on views handlebars
});

//testing to see all comments 
router.get("/comments", async (req, res) => {
    try {
      const comments = await Comment.findAll();
      res.status(200).json(comments);
    } catch (err) {
      res.status(500).json(err);
    }
    //TODO: add code to render data on views handlebars
  });

//GET a specific blogpost
//use withAuth middleware so you need to login first
router.get("/blogPost/:id", async (req, res) => {
  try {
    const blogPostData = await Blogpost.findByPk(req.params.id, {
      include: [{ model: Comment }],
    });
    if (!blogPostData) {
      res.status(404).json({ message: "no product found with this id!" });
      return;
    }
    res.status(200).json(blogPostData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET  profile route for user to see their profile page
//this will have their blog posts ?
router.get("/profile", async (req, res) => {
    //this will be a findAll() method? 
    try{

    } catch(err) {
        res.status(500).json(err);
    }
});

//GET login route for user to login
//we will render a profile handlebars for this
router.get("/login", async (req, res) => {
    try {

    } catch(err) {
        res.status(500).json(err);
    }
});

// get route to get all the posts

module.exports = router;
