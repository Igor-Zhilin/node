module.exports = function(req, res, next) {
    
res.messages=();

res.error=(msg)=>{

return res.messages(msg)

};
    next();
    };