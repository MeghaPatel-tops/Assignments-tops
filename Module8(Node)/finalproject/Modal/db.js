const mongoose = require('mongoose')


mongoose.connect(process.env.MONGOOSE_URL)
        .then(()=>{console.log("data base connected")})
        .catch((err)=>{
            console.log(error)
        })