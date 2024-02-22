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

module.exports = router;