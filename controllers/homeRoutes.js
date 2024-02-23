const router = require('express').Router();
const {User, Comment, Blogpost} = require('../models');
//TODO: add withAuth function

//Get all blogposts
router.get('/', async(req, res) => {
    try{
        const blogPostData = await Blogpost.findAll();
        res.status(200).json(blogPostData);
    } catch(err) {
    res.status(500).json(err)
    }
});

//GET a specific blogpost
//use withAuth middleware so you need to login first

//GET profile route for user to see their blogposts


//GET login route for user to login
//we will render a profile handlebars for this 

// get route to get all the posts 


module.exports = router;