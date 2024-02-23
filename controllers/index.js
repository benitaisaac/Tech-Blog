//Central route file that imports all route modules 

const router = require('express').Router();


const homeRoutes = require('./homeRoutes');

router.use('/', homeRoutes);


//for troubleshooting
router.use((req, res) => {
    res.send("<h1>Wrong Route!</h1>")
  });

module.exports = router;