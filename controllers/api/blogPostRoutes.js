const router = require('express').Router();
const {Blogpost} = require('../../models');

//Route to create a new post 
router.post("/", async(req, res) => {
    try {
        const newBlog = await Blogpost.create({
            ...req.body,
            user_id: req.session.user_id,
        });

        res.status(200).json(newBlog);
    } catch(err) {
        res.status(400).json(err);
    }
});

//route to update a post 
//we need to update the database and update the view too (without refreshing? that would be frontend)
router.put("/:id", async (req, res) => {
    try {
        const blogPostId = req.params.id;
        const updatedblogPost = await Blogpost.update(req.body, {
            where: {id: blogPostId}
        }); 
//check if the rows were affected by put request 
    if (updatedblogPost[0] === 1) {
        res.status(200).json({message: "blogpost was updated successfuly"});
    } else {
        res.status(404).json({message: "this blogpost was not found"});
    }
    } catch(err) {
        res.status(400).json(err);
    }
});

// route to delete a post 
router.delete("/:id", async (req, res) => {
    try {
        const blogPostId = req.params.id;
        const deletedPost = await Blogpost.destroy({
            where: {id: blogPostId}
        });

        if (!deletedPost){
            res.status(404).json({message: "no blogpost with this id"});
            return;
        }
        res.status(200).json({message: 'you have successfully deleted that blogpost'});
    } catch(err){
        res.status(400).json(err);
    }
});

module.exports = router;

