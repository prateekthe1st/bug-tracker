const express = require('express');
const router = express.Router();
const authenticateToken = require('../functions/authenticate');

router.get('/', authenticateToken, async (req, res) => {
    res.json({
        code: 103
    })
})

const userRoute = require('./account');
router.use('/account', userRoute);

const dashboardRoute = require('./dashboard');
router.use('/dashboard', dashboardRoute);

const teamRoute = require('./team');
router.use('/team', teamRoute);

module.exports = router;