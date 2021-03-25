const express = require('express');
const router = express.Router();
const authenticateToken = require('../functions/authenticate');
const { UserM } = require('../models/User');

router.get('/member', authenticateToken, async (req, res) => {
    const user = await UserM.findById(JSON.parse(req.user));
    res.send(`Share you team code: ${user.teamid}`)
})

const bugRoute = require('./bug');
router.use('/bug', bugRoute);

module.exports = router;