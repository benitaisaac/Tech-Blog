const router = require("express").Router();
const { User } = require("../../models");

// create a user 
router.post("/", async(req, res) => {
    try{
        const newUser = await User.create(req.body)
        req.session.save(() => {
            req.session.user_id = newUser.id;
            req.session.logged_in = true;
      
            res.status(200).json(newUser);
          });
    } catch(err){
        res.status(400).json(err);
    }
});

// create a login route

// create a logout route 

module.exports = router;