const rateLimit = require('express-rate-limit')
 const rateLimitChecker = rateLimit({
    windowMs: 24 * 60 * 60 * 1000, // 24 hrs in milliseconds
    max: 2,
    message: 'You have exceeded the 100 requests in 24 hrs limit!', 
    standardHeaders: true,
    legacyHeaders: false,
  
})

module.exports = rateLimitChecker