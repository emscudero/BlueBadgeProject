const router = require('express').Router();
const User = require('../db').import('../models/user');

router.post('/signup', (req,res) => {
    User.create({
        email:req.body.user.email,
        password:req.body.user.password
    })
    .then(
        res.send('Signup endpoint is working!')
    );
});

module.exports = router