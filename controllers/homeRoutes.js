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
  //will be called homepage
});


//GET a specific blogpost
//TODO: use withAuth middleware so you need to login first
router.get("/blogPost/:id", async (req, res) => {
  try {
    const blogPostData = await Blogpost.findByPk(req.params.id, {
      include: [{ model: Comment }],
    });
    if (!blogPostData) {
      res.status(404).json({ message: "no blogpost found with this id!" });
      return;
    }
    res.status(200).json(blogPostData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET route with blogposts only from signed in user
//(can't test through insomnia because req.sessiondoesn't exist)
router.get('/profile', async(req, res) => {
    try {
        const userData = await User.findByPk(req.session.userName, {
            attributes: { exclude: ['password']},
            include: [{model: Blogpost}],
        });
        //TODO: views, render profile handlebars

    } catch(err) {
        res.status(500).json(err);
    }
});



//if a user is logged in and goes to logged in,
//they will be redirected to their profile 
router.get("/login", (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/profile');
        return;
    }
    res.render('login');
});

// get route to get all the posts

module.exports = router;
