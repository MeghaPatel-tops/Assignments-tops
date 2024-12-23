const Addition =(a,b)=>{
        let ans = parseInt(a+b)
        return JSON.parse('[{"Addition =":ans,"multiplication":a*b,"substraction":a-b}]')
}

module.exports= {Addition}