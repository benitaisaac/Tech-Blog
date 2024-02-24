const router = require('express').Router();
const {Comment} = require ('../../models');

//Create .post route to send data 
router.post('/', async (req, res) => {
    try {
        const newComment = await Comment.create(req.body);
        res.status(200).json(newComment);
    } catch(err) {
        res.status(400).json(err);
    }
});

module.exports = router;


// Routes for comments on posts

// Route  to create a comment (POST) 