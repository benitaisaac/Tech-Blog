const router = require("express").Router();
const { User } = require("../../models");

// create a new user 
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
router.post('/login', async (req, res) => {
    try {
        const userData = await User.findOne({where: { userName: req.body.userName}});

        if (!userData) {
            res.status(400).json({ message: "Incorrect email or password, please try again"});
            return;
        }

        const validPassword = await User.findOne({where: {password: req.body.password}});

        if(!validPassword) {
            res.status(400).json({message: "Incorrect email or password, please try again"});
            return;
        }

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            res.json({user: userData, message: 'You are logged in!'});
        });
        
    } catch (err) {
        res.status(400).json(err);
    }
});

// create a logout route 


module.exports = router;