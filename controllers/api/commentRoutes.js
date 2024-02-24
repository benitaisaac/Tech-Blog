const router = require('express').Router();
const {Comment} = require ('../../models');

// Route for creating comments 
//TODO: add withAuth middleware? 
//TODO: make sure it's connected to a blog post?
router.post('/', async (req, res) => {
    try {
        const newComment = await Comment.create(
            req.body
            // user_id: req.session.user_id,
        );
        res.status(200).json(newComment);
    } catch(err) {
        res.status(400).json(err);
    }
});

module.exports = router;


// Routes for comments on posts

// Route  to create a comment (POST) 