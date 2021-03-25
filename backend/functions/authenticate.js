const jwt = require('jsonwebtoken');

function authenticateToken (req, res, next) {
    //Use Universal Cookies on react to set cookies.
    const token = req.cookies.token;
    if (token === '' || token === null) {
        res.json({
            code: 101
        })
    }else {
        jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
            if (err) {
                res.json({
                    code: 102
                })
            }else{
                req.user = user;
                next();
            }
        })
    }

}

module.exports = authenticateToken;