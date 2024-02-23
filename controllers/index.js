//Central route file that imports all route modules 

const router = require('express').Router();


const homeRoutes = require('./homeRoutes');
const authRoutes = require('./authRoutes');
const commentRoutes = require('./api/commentRoutes');
const postRoutes = require('./postRoutes');

router.use('/', homeRoutes);

//is this right? 
router.use('/auth', authRoutes);
router.use('/comment', commentRoutes);
router.use('/post', postRoutes);


//for troubleshooting
router.use((req, res) => {
    res.send("<h1>Wrong Route!</h1>")
  });

module.exports = router;