const router = require("express").Router();
const { User, Comment, Blogpost } = require("../models");
//TODO: add withAuth function

//Get all blogposts
router.get("/", async (req, res) => {
  try {
    const blogPostData = await Blogpost.findAll({
      include: [
        {
          model: User,
          attributes: ['userName'],
        },
      ],
    });

    //Serialize data so the template can read it
    const blogposts = blogPostData.map((blogpost) => blogpost.get({plain: true}));

    res.render('homepage', {
      blogposts,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


//GET a specific blogpost
//TODO: use withAuth middleware so you need to login first
router.get("/blogPost/:id", async (req, res) => {
  try {
    const blogPostData = await Blogpost.findByPk(req.params.id, {
      include: [
        { model: Comment, attributes: ['content'] },
        { model: User, attributes: ['userName'] }
      ]
    });
    if (!blogPostData) {
      res.status(404).json({ message: "no blogpost found with this id!" });
      return;
    }
       //this is for rendering the data on the page (views)
       const blogpost = blogPostData.get({ plain: true });

       console.log(blogpost);

       res.render('blogpost', {
         ...blogpost,
         logged_in: req.session.logged_in
       });
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
        
        res.render('profile');

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
