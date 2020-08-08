module.exports.token = function(req, res, next){
    console.log("Validating token...");
    next();
}