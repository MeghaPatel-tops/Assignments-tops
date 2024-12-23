const request = require('request')
const whether =  (cb)=>{
    const key = process.env.WHEATHER_API
    const lat = process.env.LAT
    const long= process.env.LONG
    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${key}`;
        request({url:url,json:true},function(error,response){
            if(error){
                cb(error,"")
            }
            else{
               cb("",response.body)
            }
        })
       
    } catch (error) {
        console.log(error)
    }
}

module.exports = {whether}